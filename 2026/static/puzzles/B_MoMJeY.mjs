class AppendableList {
  constructor() {
    const inactiveFirstPointer = new NextPointer();
    const inactiveLastPointer = inactiveFirstPointer.next;
    const inactivePreviousPointerToEntry = /* @__PURE__ */ new WeakMap();
    this.iterable = new ListIterable(
      inactiveFirstPointer,
      inactiveLastPointer,
      inactivePreviousPointerToEntry
    );
    this.appender = new ListAppender(
      inactiveLastPointer,
      inactivePreviousPointerToEntry
    );
  }
  static new() {
    return new AppendableList();
  }
}
class ListIterable {
  constructor(inactiveFirstPointer, inactiveLastPointer, inactivePreviousPointerToEntry) {
    this.inactiveFirstPointer = inactiveFirstPointer;
    this.inactiveLastPointer = inactiveLastPointer;
    this.inactivePreviousPointerToEntry = inactivePreviousPointerToEntry;
    this.active = false;
    this.activeFirstPointer = new NextPointer();
    this.activeLastPointer = this.activeFirstPointer.next;
    this.activePreviousPointerToEntry = /* @__PURE__ */ new WeakMap();
  }
  every(handler) {
    this.markAppendedAsIterable();
    let previousPointer = this.activeFirstPointer.next;
    while (previousPointer !== this.activeLastPointer) {
      let entry = this.activePreviousPointerToEntry.get(previousPointer);
      if (!entry) {
        throw new Error("Entry missing while iterating list.");
      }
      let nextPointer = entry.nextPointer;
      while (nextPointer.next.previous !== nextPointer) {
        entry = this.activePreviousPointerToEntry.get(nextPointer.next);
        if (!entry) {
          throw new Error(
            "Entry missing while iterating list; removed entry encountered."
          );
        }
        nextPointer = entry.nextPointer;
      }
      const continueIterating = handler(entry.value);
      if (!continueIterating) {
        break;
      }
      previousPointer = nextPointer.next;
    }
    this.markAppendedAsIterable();
  }
  markAppendedAsIterable() {
    let inactivePreviousPointer = this.inactiveFirstPointer.next;
    while (inactivePreviousPointer !== this.inactiveLastPointer) {
      const entry = this.inactivePreviousPointerToEntry.get(
        inactivePreviousPointer
      );
      if (!entry) {
        throw new Error(
          "Entry missing while marking list entries as iterable."
        );
      }
      this.activePreviousPointerToEntry.set(inactivePreviousPointer, entry);
      this.inactivePreviousPointerToEntry.delete(inactivePreviousPointer);
      inactivePreviousPointer = entry.nextPointer.next;
    }
    if (this.inactiveFirstPointer.next !== this.inactiveLastPointer) {
      linkPointers(
        this.activeLastPointer.previous,
        this.inactiveFirstPointer.next
      );
      linkPointers(this.inactiveLastPointer.previous, this.activeLastPointer);
      linkPointers(this.inactiveFirstPointer, this.inactiveLastPointer);
    }
  }
}
class ListAppender {
  constructor(inactiveLastPointer, inactivePreviousPointerToEntry) {
    this.inactiveLastPointer = inactiveLastPointer;
    this.inactivePreviousPointerToEntry = inactivePreviousPointerToEntry;
  }
  append(value) {
    const newNextPointer = new NextPointer();
    const newPreviousPointer = newNextPointer.next;
    linkPointers(this.inactiveLastPointer.previous, newPreviousPointer);
    linkPointers(newNextPointer, this.inactiveLastPointer);
    this.inactivePreviousPointerToEntry.set(
      newPreviousPointer,
      new Entry$1(newNextPointer, value)
    );
    return new Remover(newPreviousPointer, newNextPointer);
  }
}
class Remover {
  constructor(previousPointer, nextPointer) {
    this.previousPointer = previousPointer;
    this.nextPointer = nextPointer;
  }
  remove() {
    if (this.previousPointer && this.nextPointer) {
      linkPointers(this.previousPointer.previous, this.nextPointer.next);
      this.previousPointer = null;
      this.nextPointer = null;
    }
  }
}
let Entry$1 = class Entry {
  constructor(nextPointer, value) {
    this.nextPointer = nextPointer;
    this.value = value;
  }
};
class PreviousPointer {
  constructor(previous) {
    this.previous = previous;
  }
}
class NextPointer {
  constructor() {
    this.next = new PreviousPointer(this);
  }
}
const linkPointers = (previous, next) => {
  previous.next = next;
  next.previous = previous;
};
class Channel {
  constructor() {
    const { iterable, appender } = AppendableList.new();
    this.receiver = new Receiver(appender);
    this.sender = new Sender(iterable);
  }
  static new() {
    return new Channel();
  }
}
class Receiver {
  constructor(appender) {
    this.appender = appender;
  }
  listen(handler) {
    const remover = this.appender.append(handler);
    return new Observer(remover);
  }
}
class Sender {
  constructor(iterable) {
    this.iterable = iterable;
    this.active = false;
  }
  send(value) {
    this.active = true;
    this.iterable.every((handler) => {
      handler(value);
      return this.active;
    });
    this.active = false;
  }
  bookkeep() {
    if (this.active) {
      return;
    }
    this.iterable.markAppendedAsIterable();
  }
}
class Observer {
  constructor(remover) {
    this.remover = remover;
  }
  stop() {
    this.remover.remove();
  }
}
class LiveValuePair {
  constructor(initialValue) {
    const { receiver, sender } = Channel.new();
    const value = new LiveValueInternal(initialValue, receiver);
    this.value = value;
    this.setter = new Setter(value, sender);
  }
  static new(initialValue) {
    return new LiveValuePair(initialValue);
  }
  static null() {
    return new LiveValuePair(null);
  }
  static undefined() {
    return new LiveValuePair(void 0);
  }
}
class LiveValueInternal {
  constructor(value, updates) {
    this.updates = updates;
    this.value = value;
  }
}
class Setter {
  constructor(liveValue, updatesSender) {
    this.liveValue = liveValue;
    this.updatesSender = updatesSender;
  }
  set(value) {
    this.liveValue.value = value;
    this.updatesSender.send(value);
  }
}
class ExpandedLiveValue {
  constructor({
    value,
    setter
  }) {
    this.value = value;
    this.setter = setter;
  }
  static fromLiveValuePair(liveValuePair) {
    return new ExpandedLiveValue(liveValuePair);
  }
  static new(initialValue) {
    return ExpandedLiveValue.fromLiveValuePair(
      LiveValuePair.new(initialValue)
    );
  }
  static null() {
    return ExpandedLiveValue.fromLiveValuePair(
      LiveValuePair.null()
    );
  }
  static undefined() {
    return ExpandedLiveValue.fromLiveValuePair(
      LiveValuePair.undefined()
    );
  }
  set(value) {
    this.setter.set(value);
  }
  setIfNew(value) {
    if (value !== this.value.value) {
      this.setter.set(value);
    }
  }
}
class NoOpObserver {
  constructor() {
  }
  static new() {
    return new NoOpObserver();
  }
  stop() {
  }
}
const noOpObserver = NoOpObserver.new();
class ContextPair {
  constructor(observer) {
    const state = new State();
    const { iterable, appender } = AppendableList.new();
    this.context = new Context(observer, state, appender);
    this.manager = new ContextManager(state, iterable);
  }
  static new(observer) {
    return new ContextPair(observer);
  }
  static root() {
    return new ContextPair(null);
  }
}
class Context {
  constructor(observer, state, appender) {
    this.observer = observer;
    this.state = state;
    this.appender = appender;
  }
  linkObserver(observer) {
    if (!this.state.active) {
      observer.stop();
      return noOpObserver;
    }
    const remover = this.appender.append(observer);
    return new ObserverObserver(observer, remover);
  }
  listen(receiver, handler) {
    if (!this.state.active) {
      return noOpObserver;
    }
    const contextManagerObserver = new ContextManagerObserver(
      new NoOpContextManager()
    );
    const observer = receiver.listen((value) => {
      contextManagerObserver.manager.stop();
      const { context: context2, manager } = ContextPair.new(observer);
      contextManagerObserver.manager = manager;
      handler(value, context2);
    });
    const remover = this.appender.append(observer);
    const contextManagerRemover = this.appender.append(contextManagerObserver);
    return new OnSetObserver(
      observer,
      remover,
      contextManagerObserver,
      contextManagerRemover
    );
  }
  simpleListen(receiver, handler) {
    if (!this.state.active) {
      return noOpObserver;
    }
    const contextManagerObserver = new ContextManagerObserver(
      new NoOpContextManager()
    );
    const observer = receiver.listen(() => {
      contextManagerObserver.manager.stop();
      const { context: context2, manager } = ContextPair.new(observer);
      contextManagerObserver.manager = manager;
      handler(context2);
    });
    const remover = this.appender.append(observer);
    const contextManagerRemover = this.appender.append(contextManagerObserver);
    return new OnSetObserver(
      observer,
      remover,
      contextManagerObserver,
      contextManagerRemover
    );
  }
  onSet(liveValue, handler) {
    return this.listen(liveValue.updates, handler);
  }
  observe(liveValue, handler) {
    if (!this.state.active) {
      return noOpObserver;
    }
    const contextManagerObserver = new ContextManagerObserver(
      new NoOpContextManager()
    );
    const updatesObserver = liveValue.updates.listen((value) => {
      contextManagerObserver.manager.stop();
      const { context: context3, manager: manager2 } = ContextPair.new(observer);
      contextManagerObserver.manager = manager2;
      handler(value, context3);
    });
    const updatesRemover = this.appender.append(updatesObserver);
    const contextManagerRemover = this.appender.append(contextManagerObserver);
    const observer = new OnSetObserver(
      updatesObserver,
      updatesRemover,
      contextManagerObserver,
      contextManagerRemover
    );
    const { context: context2, manager } = ContextPair.new(observer);
    contextManagerObserver.manager = manager;
    handler(liveValue.value, context2);
    return observer;
  }
  transform(liveValue, handlerCreator, initialValue) {
    const child = ExpandedLiveValue.new(
      initialValue
    );
    if (!this.state.active) {
      return child.value;
    }
    const handler = handlerCreator(child);
    this.observe(liveValue, handler);
    return child.value;
  }
}
class ContextManager {
  constructor(state, iterable) {
    this.state = state;
    this.iterable = iterable;
  }
  stop() {
    this.state.active = false;
    const iterable = this.iterable;
    if (iterable) {
      this.iterable = null;
      iterable.every((observable) => {
        observable.stop();
        return true;
      });
    }
  }
}
class NoOpContextManager {
  stop() {
  }
}
class State {
  constructor() {
    this.active = true;
  }
}
class ObserverObserver {
  constructor(observer, remover) {
    this.observer = observer;
    this.remover = remover;
  }
  stop() {
    this.remover.remove();
    this.observer.stop();
  }
}
class OnSetObserver {
  constructor(updatesObserver, updatesRemover, contextManagerObserver, contextManagerRemover) {
    this.updatesObserver = updatesObserver;
    this.updatesRemover = updatesRemover;
    this.contextManagerObserver = contextManagerObserver;
    this.contextManagerRemover = contextManagerRemover;
  }
  stop() {
    this.updatesRemover.remove();
    this.contextManagerRemover.remove();
    this.updatesObserver.stop();
    this.contextManagerObserver.stop();
  }
}
class ContextManagerObserver {
  constructor(manager) {
    this.manager = manager;
  }
  stop() {
    this.manager.stop();
  }
}
const context = ContextPair.root().context;
const makeEntrySelectorInteractive = ({
  entriesWithDom
}) => {
  const { value: activeEntry, setter: activeEntrySetter } = LiveValuePair.null();
  let initialActiveEntry = null;
  for (const { radioButton, entry } of entriesWithDom) {
    if (!radioButton) {
      continue;
    }
    radioButton.addEventListener("change", () => {
      activeEntrySetter.set(entry);
    });
    if (radioButton.checked) {
      initialActiveEntry = entry;
      activeEntrySetter.set(entry);
    }
  }
  for (const { entry } of entriesWithDom) {
    if (!initialActiveEntry) {
      entry.view.load();
    } else {
      if (entry === initialActiveEntry) {
        entry.view.load();
      } else {
        context.observe(initialActiveEntry.view.isReady, (isReady, context2) => {
          if (isReady) {
            entry.view.load();
            context2.observer.stop();
          }
        });
      }
    }
  }
  return {
    activeEntry
  };
};
const Ids = {
  FPV: "ppp-fpv",
  FPV_VIEWER: "ppp-fpvViewer",
  FPV_CONTROL_FULLSCREEN: "ppp-fpvControlFullscreen",
  FPV_CONTROL_EXPAND: "ppp-fpvControlExpand",
  FPV_CONTROL_ZOOM_IN: "ppp-fpvControlZoomIn",
  FPV_CONTROL_ZOOM_OUT: "ppp-fpvControlZoomOut",
  FPV_SURFACE: "ppp-fpvSurface",
  MAP: "ppp-map",
  MAP_VIEWER: "ppp-mapViewer",
  MAP_PLANE: "ppp-mapPlane",
  MAP_UI: "ppp-mapUi",
  MAP_CLOSE: "ppp-mapClose",
  MAP_MEASURE_LAYER: "ppp-mapMeasureLayer",
  MAP_PIN_LAYER: "ppp-mapPinLayer",
  MAP_PIN_BODY: "ppp-mapPinBody",
  MAP_PIN_CENTER: "ppp-mapPinCenter",
  MAP_PIN_CLOSE: "ppp-mapPinClose",
  MAP_CONTROL_FULLSCREEN: "ppp-mapControlFullscreen",
  MAP_CONTROL_EXPAND: "ppp-mapControlExpand",
  MAP_CONTROL_ZOOM_IN: "ppp-mapControlZoomIn",
  MAP_CONTROL_ZOOM_OUT: "ppp-mapControlZoomOut",
  MAP_CONTROL_PLACE_PIN: "ppp-mapControlPlacePin",
  MAP_CONTROL_MEASURE_DISTANCE: "ppp-mapControlMeasureDistance"
};
const ClassNames = {
  ACTIVE: "ppp-active",
  EXPANDED: "ppp-expanded",
  DRAGGING: "ppp-dragging",
  MARKING: "ppp-marking",
  MEASURING: "ppp-measuring"
};
const SvgClassNames = {
  PIN: "pin",
  PIN_BODY: "body",
  CLOSE: "close",
  SELECTED: "selected",
  MEASURE: "measure",
  BACKGROUND_LINE: "backgroundLine",
  LINE: "line",
  MEASURE_START: "start"
};
const radioButtonIdFromEntryIndex = (entryIndex) => `ppp-entry${entryIndex}`;
class KeyHandlerMap {
  constructor() {
    this.codes = /* @__PURE__ */ new Map();
    this.keys = /* @__PURE__ */ new Map();
  }
  static new() {
    return new KeyHandlerMap();
  }
  processEvent(event) {
    var _a, _b;
    (_a = this.codes.get(event.code)) == null ? void 0 : _a(event);
    (_b = this.keys.get(event.key)) == null ? void 0 : _b(event);
  }
}
const dimensionDefinitions = {
  x: {
    positive: ["ArrowRight", "KeyD", "Numpad6"],
    negative: ["ArrowLeft", "KeyA", "Numpad4"]
  },
  y: {
    positive: ["ArrowUp", "KeyW", "Numpad8"],
    negative: ["ArrowDown", "KeyS", "Numpad2"]
  },
  z: {
    positive: ["NumpadAdd", "KeyE"],
    negative: ["NumpadSubtract", "KeyQ"]
  }
};
const trackDirectionCommands = () => {
  const { value: vectors, setter: vectorsSetter } = LiveValuePair.new(new MutableVectorsState(0, 0, 0, false, 0));
  const keyDownMap = KeyHandlerMap.new();
  const keyUpMap = KeyHandlerMap.new();
  const vectorsState = new MutableVectorsState(0, 0, 0, false, 0);
  const sendVectors = () => {
    vectorsSetter.set(
      new MutableVectorsState(
        vectorsState.x,
        vectorsState.y,
        vectorsState.z,
        vectorsState.shift,
        vectorsState.timeStamp
      )
    );
  };
  keyDownMap.keys.set("Shift", (event) => {
    if (vectorsState.shift) {
      return;
    }
    vectorsState.shift = true;
    vectorsState.timeStamp = event.timeStamp;
    sendVectors();
  });
  keyUpMap.keys.set("Shift", (event) => {
    if (!vectorsState.shift) {
      return;
    }
    vectorsState.shift = false;
    vectorsState.timeStamp = event.timeStamp;
    sendVectors();
  });
  const isKeyActiveSetters = [];
  for (const {
    def: { positive, negative },
    setter
  } of [
    {
      def: dimensionDefinitions.x,
      setter: (x) => {
        vectorsState.x = x;
      }
    },
    {
      def: dimensionDefinitions.y,
      setter: (y) => {
        vectorsState.y = y;
      }
    },
    {
      def: dimensionDefinitions.z,
      setter: (z) => {
        vectorsState.z = z;
      }
    }
  ]) {
    let magnitude = 0;
    for (const { dir, codes } of [
      { dir: 1, codes: positive },
      { dir: -1, codes: negative }
    ]) {
      let activeKeyCount = 0;
      for (const code of codes) {
        const isKeyActiveSetter = ExpandedLiveValue.new(false);
        const { value: isKeyActive } = isKeyActiveSetter;
        context.onSet(isKeyActive, (isKeyActive2) => {
          const wasZeroKeys = activeKeyCount === 0;
          activeKeyCount += isKeyActive2 ? 1 : -1;
          const isZeroKeys = activeKeyCount === 0;
          if (wasZeroKeys) {
            magnitude += dir;
          } else if (isZeroKeys) {
            magnitude -= dir;
          }
          if (wasZeroKeys || isZeroKeys) {
            setter(magnitude);
            sendVectors();
          }
        });
        keyDownMap.codes.set(code, (event) => {
          event.preventDefault();
          vectorsState.timeStamp = event.timeStamp;
          isKeyActiveSetter.setIfNew(true);
        });
        keyUpMap.codes.set(code, (event) => {
          vectorsState.timeStamp = event.timeStamp;
          isKeyActiveSetter.setIfNew(false);
        });
        isKeyActiveSetters.push(isKeyActiveSetter);
      }
    }
  }
  const onFocusOut = (event) => {
    vectorsState.timeStamp = event.timeStamp;
    for (const isKeyActiveSetter of isKeyActiveSetters) {
      isKeyActiveSetter.setIfNew(false);
    }
  };
  return { vectors, keyDownMap, keyUpMap, onFocusOut };
};
const attachDirectionTracking = (element) => {
  const tracked = trackDirectionCommands();
  const { keyDownMap, keyUpMap, onFocusOut } = tracked;
  element.addEventListener("keydown", (event) => {
    keyDownMap.processEvent(event);
  });
  element.addEventListener("keyup", (event) => {
    keyUpMap.processEvent(event);
  });
  element.addEventListener("focusout", onFocusOut);
  return tracked;
};
class MutableVectorsState {
  constructor(x, y, z, shift, timeStamp) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.shift = shift;
    this.timeStamp = timeStamp;
  }
  isActive() {
    return this.x !== 0 || this.y !== 0 || this.z !== 0;
  }
}
const attachDragTracker = (surface) => {
  const { value: dragging, setter: draggingSetter } = LiveValuePair.null();
  let isDragging = false;
  let onPointerMove = () => {
  };
  let onPointerUp = () => {
  };
  const cleanup = () => {
    surface.removeEventListener("pointermove", onPointerMove);
    surface.removeEventListener("pointerup", onPointerUp);
    surface.removeEventListener("pointercancel", onPointerUp);
    isDragging = false;
    draggingSetter.set(null);
  };
  surface.addEventListener("pointerdown", (event) => {
    if (isDragging) {
      cleanup();
    }
    const { value: coords, setter: coordsSetter } = LiveValuePair.new(
      new Coords(0, 0)
    );
    const pointerId = event.pointerId;
    const startX = event.clientX;
    const startY = event.clientY;
    onPointerMove = (event2) => {
      if (event2.pointerId !== pointerId) {
        return;
      }
      coordsSetter.set(
        new Coords(event2.clientX - startX, event2.clientY - startY)
      );
    };
    surface.addEventListener("pointermove", onPointerMove);
    onPointerUp = (event2) => {
      if (event2.pointerId !== pointerId) {
        return;
      }
      coordsSetter.set(
        new Coords(event2.clientX - startX, event2.clientY - startY)
      );
      cleanup();
    };
    surface.addEventListener("pointerup", onPointerUp);
    surface.addEventListener("pointercancel", onPointerUp);
    surface.setPointerCapture(event.pointerId);
    isDragging = true;
    draggingSetter.set(coords);
  });
  return { dragging };
};
class Coords {
  constructor(deltaX, deltaY) {
    this.deltaX = deltaX;
    this.deltaY = deltaY;
  }
}
const VIEW_WIDTH = 8192;
const VIEW_HEIGHT = VIEW_WIDTH / 2;
const WEBGL_CONTEXT_ATTRIBUTES = {
  alpha: false,
  depth: false,
  stencil: false,
  antialias: true
};
const BACKGROUND_COLOR = [0, 0, 0, 1];
const VAR_a_texCoord = "a_texCoord";
const VAR_u_aspectRatio = "u_aspectRatio";
const VAR_u_psi = "u_psi";
const VAR_u_theta = "u_theta";
const VAR_u_focal = "u_focal";
const VAR_u_image0 = "u_image0";
const VAR_u_image1 = "u_image1";
const makeFpvCanvasInteractive = ({
  canvas,
  activeEntry,
  renderState,
  isAnimating
}) => {
  const isViewActiveSetter = ExpandedLiveValue.new(false);
  const { value: isViewActive } = isViewActiveSetter;
  const { receiver: renderReceiver, sender: renderSender } = Channel.new();
  const glParams = setupGl(canvas);
  if (glParams) {
    const {
      glContext,
      varAspectRatio,
      varPsi,
      varTheta,
      varFocal,
      isSplitImage
    } = glParams;
    let renderer = () => {
    };
    context.observe(isViewActive, (isViewActive2) => {
      renderer = isViewActive2 ? () => {
        glContext.drawArrays(glContext.TRIANGLES, 0, 6);
      } : () => {
        glContext.clear(glContext.COLOR_BUFFER_BIT);
      };
    });
    let scheduledFrame = false;
    let dirty = false;
    const triggerRender = (timeStamp = performance.now()) => {
      if (scheduledFrame) {
        dirty = true;
        return;
      }
      scheduledFrame = true;
      renderSender.send(timeStamp);
      renderer();
      dirty = false;
      requestAnimationFrame((timeStamp2) => {
        scheduledFrame = false;
        if (dirty || isAnimating.value) {
          triggerRender(timeStamp2);
        }
      });
    };
    context.onSet(isViewActive, () => {
      triggerRender();
    });
    context.observe(activeEntry, (entry, context2) => {
      isViewActiveSetter.setIfNew(false);
      if (!entry) {
        return;
      }
      setTimeout(() => {
        context2.observe(entry.view.isReady, (isReady, context3) => {
          if (isReady) {
            uploadTexture(glContext, entry.view.image, isSplitImage);
            context3.observe(renderState, ({ psi, theta, focal }) => {
              glContext.uniform1f(varPsi, psi);
              glContext.uniform1f(varTheta, theta);
              glContext.uniform1f(varFocal, focal);
              triggerRender();
            });
            context3.onSet(isAnimating, (isAnimating2) => {
              if (isAnimating2) {
                triggerRender();
              }
            });
            isViewActiveSetter.set(true);
          }
        });
      }, 0);
      entry.view.load();
    });
    new ResizeObserver(() => {
      onResize(glContext, varAspectRatio, canvas);
      triggerRender();
    }).observe(canvas);
  }
  return {
    renderReceiver,
    isViewActive
  };
};
const setupGl = (canvas) => {
  const glContext = getGlContextFromCanvas(canvas);
  if (!glContext) {
    return null;
  }
  const maxTextureSize = Number(
    glContext.getParameter(glContext.MAX_TEXTURE_SIZE)
  );
  const isSplitImage = maxTextureSize < VIEW_WIDTH;
  const vertexShader = glContext.createShader(glContext.VERTEX_SHADER);
  if (!vertexShader) {
    return null;
  }
  glContext.shaderSource(vertexShader, vertexShaderSource);
  glContext.compileShader(vertexShader);
  const fragmentShader = glContext.createShader(glContext.FRAGMENT_SHADER);
  if (!fragmentShader) {
    return null;
  }
  glContext.shaderSource(
    fragmentShader,
    getFragmentShaderSource(glContext, isSplitImage)
  );
  glContext.compileShader(fragmentShader);
  const program = glContext.createProgram();
  glContext.attachShader(program, vertexShader);
  glContext.attachShader(program, fragmentShader);
  glContext.linkProgram(program);
  if (!glContext.getShaderParameter(vertexShader, glContext.COMPILE_STATUS)) {
    console.error(
      "vertex shader error",
      glContext.getShaderInfoLog(vertexShader)
    );
  }
  if (!glContext.getShaderParameter(fragmentShader, glContext.COMPILE_STATUS)) {
    console.error(
      "fragment shader error",
      glContext.getShaderInfoLog(fragmentShader)
    );
  }
  if (!glContext.getProgramParameter(program, glContext.LINK_STATUS)) {
    console.error("program error", glContext.getProgramInfoLog(program));
  }
  glContext.useProgram(program);
  const varTexCoord = glContext.getAttribLocation(program, VAR_a_texCoord);
  const varAspectRatio = glContext.getUniformLocation(
    program,
    VAR_u_aspectRatio
  );
  const varPsi = glContext.getUniformLocation(program, VAR_u_psi);
  const varTheta = glContext.getUniformLocation(program, VAR_u_theta);
  const varFocal = glContext.getUniformLocation(program, VAR_u_focal);
  if (!varAspectRatio || !varPsi || !varTheta || !varFocal) {
    return null;
  }
  glContext.clearColor(...BACKGROUND_COLOR);
  glContext.enableVertexAttribArray(varTexCoord);
  const texCoordBuffer = glContext.createBuffer();
  glContext.bindBuffer(glContext.ARRAY_BUFFER, texCoordBuffer);
  glContext.bufferData(
    glContext.ARRAY_BUFFER,
    new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1]),
    glContext.STATIC_DRAW
  );
  glContext.vertexAttribPointer(
    varTexCoord,
    2,
    // Components-per-vertex (2d)
    glContext.FLOAT,
    false,
    // Normalize
    0,
    // Stride
    0
    // Offset
  );
  const textureData = [
    {
      index: 0,
      activeTexture: glContext.TEXTURE0,
      samplerLocation: VAR_u_image0
    },
    ...isSplitImage ? [
      {
        index: 1,
        activeTexture: glContext.TEXTURE1,
        samplerLocation: VAR_u_image1
      }
    ] : []
  ];
  for (const { index, activeTexture, samplerLocation } of textureData) {
    const texture = glContext.createTexture();
    glContext.activeTexture(activeTexture);
    glContext.bindTexture(glContext.TEXTURE_2D, texture);
    glContext.texParameteri(
      glContext.TEXTURE_2D,
      glContext.TEXTURE_WRAP_S,
      glContext.CLAMP_TO_EDGE
      // can be glContext.REPEAT if power of 2
    );
    glContext.texParameteri(
      glContext.TEXTURE_2D,
      glContext.TEXTURE_WRAP_T,
      glContext.CLAMP_TO_EDGE
    );
    glContext.texParameteri(
      glContext.TEXTURE_2D,
      glContext.TEXTURE_MIN_FILTER,
      glContext.LINEAR
    );
    glContext.texParameteri(
      glContext.TEXTURE_2D,
      glContext.TEXTURE_MAG_FILTER,
      glContext.LINEAR
    );
    const sampler = glContext.getUniformLocation(program, samplerLocation);
    if (!sampler) {
      return null;
    }
    glContext.uniform1i(sampler, index);
  }
  return {
    glContext,
    varAspectRatio,
    varPsi,
    varTheta,
    varFocal,
    isSplitImage
  };
};
const uploadTexture = (glContext, view, isSplitImage) => {
  if (isSplitImage) {
    const halfWidth = VIEW_WIDTH / 2;
    const cropCanvas = document.createElement("canvas");
    cropCanvas.width = halfWidth;
    cropCanvas.height = VIEW_HEIGHT;
    const cropContext = cropCanvas.getContext("2d");
    if (!cropContext) {
      return;
    }
    const activeTextures = [glContext.TEXTURE0, glContext.TEXTURE1];
    for (let i = 0; i < 2; i++) {
      cropContext.drawImage(view, -halfWidth * i, 0);
      const cropImage = cropContext.getImageData(0, 0, halfWidth, VIEW_HEIGHT);
      glContext.activeTexture(activeTextures[i]);
      glContext.texImage2D(
        glContext.TEXTURE_2D,
        0,
        glContext.RGB,
        glContext.RGB,
        glContext.UNSIGNED_BYTE,
        cropImage
      );
    }
  } else {
    glContext.texImage2D(
      glContext.TEXTURE_2D,
      0,
      glContext.RGB,
      glContext.RGB,
      glContext.UNSIGNED_BYTE,
      view
    );
  }
};
const onResize = (glContext, varAspectRatio, canvas) => {
  const pixelRatio = window.devicePixelRatio ?? 1;
  canvas.width = canvas.clientWidth * pixelRatio;
  canvas.height = canvas.clientHeight * pixelRatio;
  const { drawingBufferWidth, drawingBufferHeight } = glContext;
  glContext.viewport(0, 0, drawingBufferWidth, drawingBufferHeight);
  glContext.uniform1f(varAspectRatio, drawingBufferWidth / drawingBufferHeight);
};
const getGlContextFromCanvas = (canvas) => {
  return canvas.getContext("webgl2", WEBGL_CONTEXT_ATTRIBUTES) ?? canvas.getContext("webgl", WEBGL_CONTEXT_ATTRIBUTES) ?? canvas.getContext(
    "experimental-webgl",
    WEBGL_CONTEXT_ATTRIBUTES
  );
};
const vertexShaderSource = `attribute vec2 ${VAR_a_texCoord};
varying vec2 v_texCoord;

void main() {
${""}  gl_Position = vec4(${VAR_a_texCoord}, 0.0, 1.0);
${""}  v_texCoord = ${VAR_a_texCoord};
}`;
const getFragmentShaderSource = (glContext, isSplitImage) => {
  const precisionFormat = glContext.getShaderPrecisionFormat(
    glContext.FRAGMENT_SHADER,
    glContext.HIGH_FLOAT
  );
  const precision = precisionFormat && precisionFormat.precision >= 1 ? "highp" : "mediump";
  return `precision ${precision} float;

uniform float ${VAR_u_aspectRatio};
uniform float ${VAR_u_psi};
uniform float ${VAR_u_theta};
uniform float ${VAR_u_focal};

const float PI = 3.14159265358979323846264;

${""}uniform sampler2D ${VAR_u_image0};
${isSplitImage ? `uniform sampler2D ${VAR_u_image1};
` : ""}
${""}varying vec2 v_texCoord;

${""}const vec4 backgroundColor = vec4(0.0, 0.0, 0.0, 1.0);

void main() {
${""}  float x = v_texCoord.x * ${VAR_u_aspectRatio};
  float y = v_texCoord.y;
  float sintheta = sin(${VAR_u_theta});
  float costheta = cos(${VAR_u_theta});
  float a = ${VAR_u_focal} * costheta - y * sintheta;
  float root = sqrt(x * x + a * a);
  float lambda = atan(x / root, a / root) + ${VAR_u_psi};
  float phi = atan((y * costheta + ${VAR_u_focal} * sintheta) / root);

${""}  lambda = mod(lambda + PI, PI * 2.0) - PI;

${""}  vec2 coord = vec2(lambda / PI, phi / (PI / 2.0));

${""}${""}  if (coord.x < -1.0 || coord.x > 1.0 || coord.y < -1.0 || coord.y > 1.0) {
    gl_FragColor = backgroundColor;
  } else {
${isSplitImage ? `    if (coord.x < 0.0) {
      gl_FragColor = texture2D(${VAR_u_image0}, vec2(coord.x + 1.0, (-coord.y + 1.0) / 2.0));
    } else {
      gl_FragColor = texture2D(${VAR_u_image1}, vec2(coord.x, (-coord.y + 1.0) / 2.0));
    }
` : `    gl_FragColor = texture2D(${VAR_u_image0}, vec2((coord.x + 1.0) / 2.0, (-coord.y + 1.0) / 2.0));
`}  }
}`;
};
const makeInteractionContainerInteractive = ({
  container,
  viewer,
  controlFullscreen,
  controlExpand
}) => {
  const isFullscreenSetter = ExpandedLiveValue.new(false);
  const { value: isFullscreen } = isFullscreenSetter;
  const isExpandedSetter = ExpandedLiveValue.new(false);
  const { value: isExpanded } = isExpandedSetter;
  if (viewer) {
    const isViewerFullscreen = () => document.fullscreenElement === viewer;
    viewer.addEventListener("fullscreenchange", () => {
      isFullscreenSetter.setIfNew(isViewerFullscreen());
    });
    isFullscreenSetter.setIfNew(isViewerFullscreen());
    if (controlFullscreen) {
      context.observe(isFullscreen, (isFullscreen2) => {
        controlFullscreen.classList.toggle(ClassNames.ACTIVE, isFullscreen2);
      });
      controlFullscreen.addEventListener("click", () => {
        if (isFullscreen.value) {
          document.exitFullscreen().catch(() => {
          });
        } else {
          viewer.requestFullscreen().catch(() => {
          });
        }
      });
    }
    if (controlExpand) {
      context.observe(isFullscreen, (isFullscreen2) => {
        controlExpand.disabled = isFullscreen2;
      });
    }
  }
  if (controlExpand) {
    controlExpand.addEventListener("click", () => {
      isExpandedSetter.set(!isExpanded.value);
    });
    context.observe(isExpanded, (isExpanded2) => {
      controlExpand.classList.toggle(ClassNames.ACTIVE, isExpanded2);
    });
    if (container) {
      context.observe(isExpanded, (isExpanded2) => {
        container.classList.toggle(ClassNames.EXPANDED, isExpanded2);
        if (isExpanded2) {
          viewer == null ? void 0 : viewer.scrollIntoView({ block: "center" });
        }
      });
    }
  }
  return {
    isFullscreen,
    isExpanded
  };
};
const setDisableAndMaybeRefocus = (button, disabled, focus) => {
  if (disabled === button.disabled) {
    return;
  }
  if (disabled && document.activeElement === button) {
    focus == null ? void 0 : focus.focus({ preventScroll: true });
  }
  button.disabled = disabled;
};
const blurActiveElement = () => {
  const { activeElement } = document;
  if (activeElement instanceof HTMLElement || activeElement instanceof SVGElement) {
    activeElement.blur();
  }
};
const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};
const DEFAULT_PSI = 0;
const DEFAULT_THETA = 0;
const DEFAULT_FOCAL = 1.75;
const MAX_THETA = Math.PI / 2;
const MIN_THETA = -MAX_THETA;
const MAX_FOCAL = 6.75;
const MIN_FOCAL = 1.75;
class RenderState {
  constructor(psi, theta, focal) {
    this.psi = psi;
    this.theta = theta;
    this.focal = focal;
  }
  static new(psi, theta, focal) {
    return new RenderState(psi, theta, focal);
  }
  static default() {
    return new RenderState(DEFAULT_PSI, DEFAULT_THETA, DEFAULT_FOCAL);
  }
}
const PSI_RATE = Math.PI / 2 / 1e3;
const THETA_RATE = Math.PI / 2 / 1e3;
const FOCAL_RATE = 3 / 1e3;
const PSI_BOOST_RATE = PSI_RATE * 2;
const THETA_BOOST_RATE = THETA_RATE * 2;
const FOCAL_BOOST_RATE = FOCAL_RATE * 2;
const FOCAL_STEP = 1;
const makeFpvInteractive = ({
  container,
  viewer,
  controlFullscreen,
  controlExpand,
  controlZoomIn,
  controlZoomOut,
  surface,
  activeEntry
}) => {
  const { isFullscreen } = makeInteractionContainerInteractive({
    container,
    viewer,
    controlFullscreen,
    controlExpand
  });
  if (!surface) {
    return;
  }
  const { value: renderState, setter: renderStateSetter } = LiveValuePair.new(
    RenderState.default()
  );
  const isAnimatingSetter = ExpandedLiveValue.new(false);
  const { value: isAnimating } = isAnimatingSetter;
  let renderTimeStamp = 0;
  const { renderReceiver, isViewActive } = makeFpvCanvasInteractive({
    canvas: surface,
    activeEntry,
    renderState,
    isAnimating
  });
  const { dragging } = attachDragTracker(surface);
  const setRenderState = (renderState2, timeStamp = performance.now()) => {
    renderStateSetter.set(renderState2);
    renderTimeStamp = timeStamp;
  };
  context.onSet(isViewActive, (isViewActive2) => {
    if (!isViewActive2) {
      setRenderState(RenderState.default());
    }
  });
  const zoomIn = () => {
    const currentRenderState = renderState.value;
    setRenderState(
      RenderState.new(
        currentRenderState.psi,
        currentRenderState.theta,
        limitFocal(currentRenderState.focal + FOCAL_STEP)
      )
    );
  };
  const zoomOut = () => {
    const currentRenderState = renderState.value;
    setRenderState(
      RenderState.new(
        currentRenderState.psi,
        currentRenderState.theta,
        limitFocal(currentRenderState.focal - FOCAL_STEP)
      )
    );
  };
  if (viewer) {
    viewer.addEventListener("wheel", (event) => {
      if (isFullscreen.value || viewer.contains(document.activeElement)) {
        const { deltaY } = event;
        if (deltaY !== 0) {
          if (deltaY < 0) {
            zoomIn();
          } else {
            zoomOut();
          }
          event.preventDefault();
        }
      }
    });
    const { vectors, keyDownMap } = attachDirectionTracking(viewer);
    keyDownMap.keys.set("Escape", () => {
      blurActiveElement();
    });
    keyDownMap.keys.set(" ", (event) => {
      event.preventDefault();
      setRenderState(RenderState.default(), event.timeStamp);
    });
    context.observe(isViewActive, (isViewActive2, context2) => {
      if (!isViewActive2) {
        isAnimatingSetter.setIfNew(false);
        return;
      }
      context2.observe(dragging, (dragging2, context3) => {
        if (dragging2) {
          isAnimatingSetter.setIfNew(false);
          return;
        }
        let lastVectors = vectors.value;
        renderTimeStamp = lastVectors.isActive() ? performance.now() : 0;
        const tick = (timeStamp) => {
          if (lastVectors.isActive()) {
            const currentRenderState = renderState.value;
            setRenderState(
              RenderState.new(
                currentRenderState.psi + interpolate(lastVectors.x, renderTimeStamp, timeStamp) * (lastVectors.shift ? PSI_BOOST_RATE : PSI_RATE),
                limitTheta(
                  currentRenderState.theta + interpolate(lastVectors.y, renderTimeStamp, timeStamp) * (lastVectors.shift ? THETA_BOOST_RATE : THETA_RATE)
                ),
                limitFocal(
                  currentRenderState.focal + interpolate(lastVectors.z, renderTimeStamp, timeStamp) * (lastVectors.shift ? FOCAL_BOOST_RATE : FOCAL_RATE)
                )
              ),
              timeStamp
            );
          } else {
            renderTimeStamp = timeStamp;
          }
        };
        context3.onSet(vectors, (vectors2) => {
          tick(vectors2.timeStamp);
          lastVectors = vectors2;
        });
        context3.observe(vectors, (vectors2, context4) => {
          const active = vectors2.isActive();
          if (active) {
            context4.listen(renderReceiver, (timeStamp) => {
              tick(timeStamp);
            });
          }
          isAnimatingSetter.setIfNew(active);
        });
      });
    });
  }
  context.observe(dragging, (dragging2, context2) => {
    surface.classList.toggle(ClassNames.DRAGGING, !!dragging2);
    if (dragging2) {
      const renderStateStart = renderState.value;
      const focal = renderStateStart.focal;
      const surfaceWidth = surface.clientWidth;
      const surfaceHeight = surface.clientHeight;
      context2.observe(dragging2, (coords) => {
        renderStateSetter.set(
          RenderState.new(
            renderStateStart.psi + coords.deltaX / surfaceWidth / focal * -3,
            limitTheta(
              renderStateStart.theta + coords.deltaY / surfaceHeight / focal * 2
            ),
            focal
          )
        );
      });
    }
  });
  surface.addEventListener("dblclick", (_event) => {
    zoomIn();
  });
  if (controlZoomIn) {
    controlZoomIn.addEventListener("click", (_event) => {
      zoomIn();
    });
    const isMaxZoom = context.transform(
      renderState,
      (setter) => (renderState2) => {
        setter.setIfNew(renderState2.focal >= MAX_FOCAL);
      },
      false
    );
    context.observe(isMaxZoom, (isMaxZoom2) => {
      setDisableAndMaybeRefocus(controlZoomIn, isMaxZoom2, viewer);
    });
  }
  if (controlZoomOut) {
    controlZoomOut.addEventListener("click", (_event) => {
      zoomOut();
    });
    const isMinZoom = context.transform(
      renderState,
      (setter) => (renderState2) => {
        setter.setIfNew(renderState2.focal <= MIN_FOCAL);
      },
      false
    );
    context.observe(isMinZoom, (isMinZoom2) => {
      setDisableAndMaybeRefocus(controlZoomOut, isMinZoom2, viewer);
    });
  }
};
const limitTheta = (theta) => clamp(theta, MIN_THETA, MAX_THETA);
const limitFocal = (focal) => clamp(focal, MIN_FOCAL, MAX_FOCAL);
const interpolate = (magnitude, startTimeStamp, timeStamp) => magnitude * (timeStamp - startTimeStamp);
const makeEntriesInteractive = ({
  entriesWithDom,
  fpvContainer,
  fpvViewer,
  fpvSurface,
  fpvControlFullscreen,
  fpvControlExpand,
  fpvControlZoomIn,
  fpvControlZoomOut
}) => {
  const { activeEntry } = makeEntrySelectorInteractive({
    entriesWithDom
  });
  makeFpvInteractive({
    container: fpvContainer,
    viewer: fpvViewer,
    controlFullscreen: fpvControlFullscreen,
    controlExpand: fpvControlExpand,
    controlZoomIn: fpvControlZoomIn,
    controlZoomOut: fpvControlZoomOut,
    surface: fpvSurface,
    activeEntry
  });
};
class Entry2 {
  constructor(index, viewSrc) {
    this.index = index;
    this.view = new LoadableImage(viewSrc);
    context.observe(this.view.loadState, (loadState) => {
      if (loadState === 3) {
        console.warn(`View ${this.index} failed to load`);
      }
    });
  }
}
class LoadableImage {
  constructor(src) {
    this.src = src;
    this.image = new Image();
    const { value: loadState, setter: loadStateSetter } = LiveValuePair.new(
      0
      /* BEFORE_LOADING */
    );
    this.loadState = loadState;
    this.isReady = context.transform(
      loadState,
      (setter) => (loadState2) => {
        setter.setIfNew(
          loadState2 === 2
          /* LOADED */
        );
      },
      false
    );
    this.loadStateSetter = loadStateSetter;
  }
  load() {
    const loadState = this.loadState.value;
    if (loadState === 2 || loadState === 1) {
      return;
    }
    if (loadState === 0) {
      const onLoad = () => {
        this.loadStateSetter.set(
          2
          /* LOADED */
        );
        this.image.removeEventListener("load", onLoad);
        this.image.removeEventListener("error", onError);
      };
      this.image.addEventListener("load", onLoad);
      const onError = () => {
        this.loadStateSetter.set(
          3
          /* ERROR */
        );
      };
      this.image.addEventListener("error", onError);
    }
    this.loadStateSetter.set(
      1
      /* LOADING */
    );
    this.image.src = this.src;
  }
}
const MAP_WIDTH = 1e3;
const MAP_HEIGHT = MAP_WIDTH;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 16;
const PIN_BUFFER = 1;
const SVG_NS = "http://www.w3.org/2000/svg";
const XLINK_NS = "http://www.w3.org/1999/xlink";
const getOffsetFromEvent = (viewer, event) => {
  const box = viewer.getBoundingClientRect();
  return {
    x: event.clientX - (box.left + box.width / 2),
    y: event.clientY - (box.top + box.height / 2)
  };
};
class LineController {
  constructor(mapController, element, backgroundElement, lineElement, centerElement, distance, startPin, endPin) {
    this.mapController = mapController;
    this.element = element;
    this.backgroundElement = backgroundElement;
    this.lineElement = lineElement;
    this.centerElement = centerElement;
    this.distance = distance;
    this.startPin = startPin;
    this.endPin = endPin;
    this.selected = false;
  }
  render() {
    const x1 = this.startPin.x;
    const y1 = this.startPin.y;
    const x2 = this.endPin.x;
    const y2 = this.endPin.y;
    const zoom = this.mapController.zoom;
    const vx1 = x1 * zoom;
    const vy1 = y1 * zoom;
    const vx2 = x2 * zoom;
    const vy2 = y2 * zoom;
    this.backgroundElement.setAttribute("x1", `${vx1}`);
    this.backgroundElement.setAttribute("y1", `${vy1}`);
    this.backgroundElement.setAttribute("x2", `${vx2}`);
    this.backgroundElement.setAttribute("y2", `${vy2}`);
    this.lineElement.setAttribute("x1", `${vx1}`);
    this.lineElement.setAttribute("y1", `${vy1}`);
    this.lineElement.setAttribute("x2", `${vx2}`);
    this.lineElement.setAttribute("y2", `${vy2}`);
    this.centerElement.setAttribute(
      "transform",
      `translate(${(vx1 + vx2) / 2},${(vy1 + vy2) / 2})`
    );
    this.distance.nodeValue = `${Math.round(
      Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) * 5e3 / 4120
    )}`;
  }
  toggleSelected() {
    this.selected = !this.selected;
    this.element.classList.toggle(SvgClassNames.SELECTED, this.selected);
  }
  remove() {
    this.element.remove();
    this.startPin.delink(this.endPin);
    this.endPin.delink(this.startPin);
  }
}
const createMeasureElement = () => {
  const group = document.createElementNS(SVG_NS, "g");
  group.classList.add(SvgClassNames.MEASURE);
  const backgroundElement = document.createElementNS(SVG_NS, "line");
  backgroundElement.classList.add(SvgClassNames.BACKGROUND_LINE);
  group.appendChild(backgroundElement);
  const lineElement = document.createElementNS(SVG_NS, "line");
  lineElement.classList.add(SvgClassNames.LINE);
  group.appendChild(lineElement);
  const centerElement = document.createElementNS(SVG_NS, "g");
  group.appendChild(centerElement);
  const closeElement = document.createElementNS(SVG_NS, "use");
  closeElement.setAttributeNS(XLINK_NS, "xlink:href", `#${Ids.MAP_CLOSE}`);
  closeElement.classList.add(SvgClassNames.CLOSE);
  closeElement.setAttribute("x", "0");
  closeElement.setAttribute("y", "-16");
  centerElement.appendChild(closeElement);
  const text = document.createElementNS(SVG_NS, "text");
  text.setAttribute("x", "-4");
  text.setAttribute("y", "16");
  centerElement.appendChild(text);
  const distance = document.createTextNode("");
  text.appendChild(distance);
  return {
    group,
    backgroundElement,
    lineElement,
    centerElement,
    closeElement,
    distance
  };
};
class PinController {
  constructor(mapController, element, pinElement, x, y) {
    this.mapController = mapController;
    this.element = element;
    this.pinElement = pinElement;
    this.selected = false;
    this.measureStart = false;
    this.lines = /* @__PURE__ */ new Map();
    this.x = clamp(x, PIN_BUFFER, MAP_WIDTH - PIN_BUFFER);
    this.y = clamp(y, PIN_BUFFER, MAP_HEIGHT - PIN_BUFFER);
  }
  getLink(pin) {
    return this.lines.get(pin) ?? null;
  }
  link(pin, line) {
    this.lines.set(pin, line);
  }
  delink(pin) {
    this.lines.delete(pin);
  }
  toggleSelected() {
    this.setSelected(!this.selected);
  }
  setSelected(selected) {
    if (selected === this.selected) {
      return;
    }
    this.selected = selected;
    this.element.classList.toggle(SvgClassNames.SELECTED, selected);
    if (selected) {
      this.mapController.setActivePin(this);
    } else {
      this.mapController.unsetMaybeActivePin(this);
    }
  }
  setMeasureStart(measureStart) {
    if (measureStart === this.measureStart) {
      return;
    }
    this.measureStart = measureStart;
    this.element.classList.toggle(SvgClassNames.MEASURE_START, measureStart);
  }
  setMapPosition(x, y) {
    this.x = clamp(x, PIN_BUFFER, MAP_WIDTH - PIN_BUFFER);
    this.y = clamp(y, PIN_BUFFER, MAP_HEIGHT - PIN_BUFFER);
    this.render();
  }
  render() {
    const zoom = this.mapController.zoom;
    this.element.setAttribute(
      "transform",
      `translate(${this.x * zoom},${this.y * zoom})`
    );
    for (const line of this.lines.values()) {
      line.render();
    }
  }
  remove() {
    this.mapController.unsetMaybeActivePin(this);
    this.element.remove();
    for (const line of this.lines.values()) {
      line.remove();
    }
  }
}
const createPinElement = () => {
  const group = document.createElementNS(SVG_NS, "g");
  group.classList.add(SvgClassNames.PIN);
  const pinElement = document.createElementNS(SVG_NS, "g");
  pinElement.classList.add(SvgClassNames.PIN_BODY);
  group.appendChild(pinElement);
  const pinBodyElement = document.createElementNS(SVG_NS, "use");
  pinBodyElement.setAttributeNS(XLINK_NS, "xlink:href", `#${Ids.MAP_PIN_BODY}`);
  pinElement.appendChild(pinBodyElement);
  const pinCenterElement = document.createElementNS(SVG_NS, "use");
  pinCenterElement.setAttributeNS(
    XLINK_NS,
    "xlink:href",
    `#${Ids.MAP_PIN_CENTER}`
  );
  pinElement.appendChild(pinCenterElement);
  const closeElement = document.createElementNS(SVG_NS, "use");
  closeElement.setAttributeNS(XLINK_NS, "xlink:href", `#${Ids.MAP_PIN_CLOSE}`);
  closeElement.classList.add(SvgClassNames.CLOSE);
  group.appendChild(closeElement);
  return { group, pinElement, closeElement };
};
class MapController {
  constructor({
    viewer,
    plane,
    ui,
    measureLayer,
    pinLayer,
    controlZoomIn,
    controlZoomOut,
    controlPlacePin,
    controlMeasureDistance
  }) {
    this.x = 0;
    this.y = 0;
    this.zoom = MIN_ZOOM;
    this.viewerWidth = 0;
    this.viewerHeight = 0;
    this.dragging = false;
    this.dragged = false;
    this.marking = false;
    this.measuring = false;
    this.pins = /* @__PURE__ */ new Map();
    this.activePin = null;
    this.draggingPin = null;
    this.lines = /* @__PURE__ */ new Map();
    this.activeLineStart = null;
    this.cleanupDrag = () => {
    };
    this.viewer = viewer;
    this.plane = plane;
    this.ui = ui;
    this.measureLayer = measureLayer;
    this.pinLayer = pinLayer;
    this.controlZoomIn = controlZoomIn;
    this.controlZoomOut = controlZoomOut;
    this.controlPlacePin = controlPlacePin;
    this.controlMeasureDistance = controlMeasureDistance;
  }
  initialize() {
    this.plane.style.minWidth = "";
    this.plane.style.minHeight = "";
    this.viewerWidth = this.viewer.clientWidth;
    this.viewerHeight = this.viewer.clientHeight;
    this.plane.style.width = `${MAP_WIDTH * this.zoom}px`;
    this.plane.style.height = `${MAP_HEIGHT * this.zoom}px`;
    this.ui.setAttribute(
      "viewBox",
      `0 0 ${MAP_WIDTH * this.zoom} ${MAP_HEIGHT * this.zoom}`
    );
    this.setZoom(this.zoom);
  }
  onResize() {
    this.viewerWidth = this.viewer.clientWidth;
    this.viewerHeight = this.viewer.clientHeight;
    this.setZoom(this.zoom);
    this.setPosition(this.x, this.y);
  }
  zoomIn(offsetX, offsetY) {
    this.setZoom(this.zoom * 2, offsetX, offsetY);
  }
  zoomOut(offsetX, offsetY) {
    this.setZoom(this.zoom / 2, offsetX, offsetY);
  }
  startDrag(event) {
    if (this.dragging) {
      const { cleanupDrag } = this;
      cleanupDrag();
    }
    const pointerId = event.pointerId;
    this.dragging = true;
    this.dragged = false;
    const targetPin = this.getPinFromEvent(event);
    this.draggingPin = targetPin === this.activePin ? targetPin : null;
    this.plane.classList.add(ClassNames.DRAGGING);
    let startX = this.x;
    let startY = this.y;
    if (this.draggingPin) {
      startX = this.draggingPin.x * this.zoom;
      startY = this.draggingPin.y * this.zoom;
    }
    const startMouseX = event.clientX;
    const startMouseY = event.clientY;
    const setPositionFromEvent = (event2) => {
      const mouseX = event2.clientX;
      const mouseY = event2.clientY;
      const x = startX + mouseX - startMouseX;
      const y = startY + mouseY - startMouseY;
      if (this.draggingPin) {
        this.draggingPin.setMapPosition(x / this.zoom, y / this.zoom);
      } else {
        this.setPosition(x, y);
      }
    };
    const getMapPositionFromEvent = (event2) => {
      const { x, y } = getOffsetFromEvent(this.viewer, event2);
      return {
        x: (x - this.x) / this.zoom + MAP_WIDTH / 2,
        y: (y - this.y) / this.zoom + MAP_HEIGHT / 2
      };
    };
    const onPointerMove = (event2) => {
      if (event2.pointerId !== pointerId) {
        return;
      }
      this.dragged = true;
      setPositionFromEvent(event2);
    };
    document.addEventListener("pointermove", onPointerMove);
    const onPointerUp = (event2) => {
      if (event2.pointerId !== pointerId) {
        return;
      }
      const { cleanupDrag } = this;
      cleanupDrag();
      this.dragging = false;
      this.plane.classList.remove(ClassNames.DRAGGING);
      if (this.dragged) {
        setPositionFromEvent(event2);
      } else {
        if (this.marking) {
          const { group, pinElement, closeElement } = createPinElement();
          this.pinLayer.appendChild(group);
          const { x, y } = getMapPositionFromEvent(event2);
          const pin = new PinController(this, group, pinElement, x, y);
          this.pins.set(pinElement, pin);
          if (this.pins.size >= 2) {
            this.controlMeasureDistance.disabled = false;
          }
          closeElement.addEventListener("click", () => {
            if (this.dragged) {
              return;
            }
            pin.remove();
            this.pins.delete(pinElement);
            if (this.pins.size < 2) {
              this.controlMeasureDistance.disabled = true;
            }
          });
          pin.render();
          if (!event2.shiftKey) {
            this.setMarking(false);
          }
        } else if (this.measuring) {
          if (targetPin) {
            if (this.activeLineStart) {
              if (targetPin !== this.activeLineStart) {
                const line = this.activeLineStart.getLink(targetPin);
                if (line) {
                  line.remove();
                } else {
                  const {
                    group,
                    backgroundElement,
                    lineElement,
                    centerElement,
                    closeElement,
                    distance
                  } = createMeasureElement();
                  this.measureLayer.appendChild(group);
                  const line2 = new LineController(
                    this,
                    group,
                    backgroundElement,
                    lineElement,
                    centerElement,
                    distance,
                    this.activeLineStart,
                    targetPin
                  );
                  this.activeLineStart.link(targetPin, line2);
                  targetPin.link(this.activeLineStart, line2);
                  line2.render();
                  group.addEventListener("click", () => {
                    line2.toggleSelected();
                  });
                  closeElement.addEventListener("click", () => {
                    line2.remove();
                  });
                }
              }
              this.activeLineStart.setMeasureStart(false);
              this.activeLineStart = null;
              if (!event2.shiftKey) {
                this.setMeasuring(false);
              }
            } else {
              this.activeLineStart = targetPin;
              targetPin.setMeasureStart(true);
            }
          }
        } else {
          if (targetPin) {
            targetPin.toggleSelected();
          } else {
            this.unsetActivePin();
          }
        }
      }
      this.draggingPin = null;
    };
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointercancel", onPointerUp);
    this.cleanupDrag = () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerUp);
    };
  }
  togglePlacePin() {
    this.setMarking(!this.marking);
  }
  toggleMeasureDistance() {
    this.setMeasuring(!this.measuring);
  }
  setActivePin(pin) {
    var _a;
    if (pin === this.activePin) {
      return;
    }
    (_a = this.activePin) == null ? void 0 : _a.setSelected(false);
    this.activePin = pin;
    pin.setSelected(true);
  }
  unsetActivePin() {
    var _a;
    (_a = this.activePin) == null ? void 0 : _a.setSelected(false);
    this.activePin = null;
  }
  unsetMaybeActivePin(pin) {
    if (pin === this.activePin) {
      this.unsetActivePin();
    }
  }
  setPosition(x, y) {
    const getMax = (mapLength, viewerLength) => Math.max((mapLength * this.zoom - viewerLength) / 2, 0);
    const maxX = getMax(MAP_WIDTH, this.viewerWidth);
    const maxY = getMax(MAP_HEIGHT, this.viewerHeight);
    x = x > maxX ? maxX : x < -maxX ? -maxX : x;
    y = y > maxY ? maxY : y < -maxY ? -maxY : y;
    this.x = x;
    this.y = y;
    this.plane.style.transform = `translate(${x}px, ${y}px)`;
  }
  setZoom(zoom, offsetX = 0, offsetY = 0) {
    const getMin = (mapLength, viewerLength) => viewerLength / mapLength;
    const minZoom = Math.max(
      Math.min(
        getMin(MAP_WIDTH, this.viewerWidth),
        getMin(MAP_HEIGHT, this.viewerHeight)
      ),
      MIN_ZOOM
    );
    zoom = zoom < minZoom ? minZoom : zoom > MAX_ZOOM ? MAX_ZOOM : zoom;
    if (zoom !== this.zoom) {
      const ratio = 1 - zoom / this.zoom;
      const getPos = (offset, old) => ratio * (offset - old) + old;
      this.zoom = zoom;
      this.plane.style.width = `${MAP_WIDTH * zoom}px`;
      this.plane.style.height = `${MAP_HEIGHT * zoom}px`;
      this.setPosition(getPos(offsetX, this.x), getPos(offsetY, this.y));
      this.ui.setAttribute(
        "viewBox",
        `0 0 ${MAP_WIDTH * zoom} ${MAP_HEIGHT * zoom}`
      );
      for (const pin of this.pins.values()) {
        pin.render();
      }
    }
    setDisableAndMaybeRefocus(
      this.controlZoomIn,
      zoom >= MAX_ZOOM,
      this.viewer
    );
    setDisableAndMaybeRefocus(
      this.controlZoomOut,
      zoom <= minZoom,
      this.viewer
    );
  }
  setMarking(marking) {
    this.marking = marking;
    this.plane.classList.toggle(ClassNames.MARKING, marking);
    this.controlPlacePin.classList.toggle(ClassNames.ACTIVE, marking);
    if (marking && this.measuring) {
      this.setMeasuring(false);
    }
  }
  setMeasuring(measuring) {
    this.measuring = measuring;
    this.plane.classList.toggle(ClassNames.MEASURING, measuring);
    this.controlMeasureDistance.classList.toggle(ClassNames.ACTIVE, measuring);
    if (!measuring && this.activeLineStart) {
      this.activeLineStart.setMeasureStart(false);
      this.activeLineStart = null;
    }
    if (measuring && this.marking) {
      this.setMarking(false);
    }
  }
  getPinFromEvent(event) {
    const target = event.target;
    if (!(target instanceof SVGElement)) {
      return;
    }
    if (target.classList.contains(SvgClassNames.PIN_BODY)) {
      return this.pins.get(target) ?? null;
    }
    const parent = target.parentNode;
    if (!(parent instanceof SVGElement)) {
      return;
    }
    if (parent.classList.contains(SvgClassNames.PIN_BODY)) {
      return this.pins.get(parent) ?? null;
    }
    return null;
  }
}
const makeMapInteractive = ({
  container,
  viewer,
  plane,
  ui,
  measureLayer,
  pinLayer,
  controlFullscreen,
  controlExpand,
  controlZoomIn,
  controlZoomOut,
  controlPlacePin,
  controlMeasureDistance
}) => {
  makeInteractionContainerInteractive({
    container,
    viewer,
    controlFullscreen,
    controlExpand
  });
  if (!viewer || !plane || !ui || !measureLayer || !pinLayer || !controlZoomIn || !controlZoomOut || !controlPlacePin || !controlMeasureDistance) {
    return;
  }
  const mapController = new MapController({
    viewer,
    plane,
    ui,
    measureLayer,
    pinLayer,
    controlZoomIn,
    controlZoomOut,
    controlPlacePin,
    controlMeasureDistance
  });
  mapController.initialize();
  new ResizeObserver(() => {
    mapController.onResize();
  }).observe(viewer);
  viewer.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      blurActiveElement();
    }
  });
  viewer.addEventListener("wheel", (event) => {
    if (document.fullscreenElement || viewer.contains(document.activeElement)) {
      const { deltaY } = event;
      if (deltaY !== 0) {
        const { x, y } = getOffsetFromEvent(viewer, event);
        if (deltaY < 0) {
          mapController.zoomIn(x, y);
        } else {
          mapController.zoomOut(x, y);
        }
        event.preventDefault();
      }
    }
  });
  plane.addEventListener("pointerdown", (event) => {
    mapController.startDrag(event);
  });
  plane.addEventListener("dblclick", (event) => {
    const { x, y } = getOffsetFromEvent(viewer, event);
    mapController.zoomIn(x, y);
  });
  controlZoomIn.addEventListener("click", () => {
    mapController.zoomIn();
  });
  controlZoomOut.addEventListener("click", () => {
    mapController.zoomOut();
  });
  controlPlacePin.addEventListener("click", () => {
    mapController.togglePlacePin();
  });
  controlMeasureDistance.addEventListener("click", () => {
    mapController.toggleMeasureDistance();
  });
};
const view1Src = "/2026/static/puzzles/assets/b3062a3ab182c6b1.jpg";
const view2Src = "/2026/static/puzzles/assets/86bf204968ec1f10.jpg";
const view3Src = "/2026/static/puzzles/assets/e478530839529c2a.jpg";
const view4Src = "/2026/static/puzzles/assets/6a29eb17c547516e.jpg";
const view5Src = "/2026/static/puzzles/assets/24961a9990d5e275.jpg";
const view6Src = "/2026/static/puzzles/assets/091ac90c8621cd71.jpg";
const view7Src = "/2026/static/puzzles/assets/58b78945753047e1.jpg";
const puzzleDef$1 = {
  entries: [
    { view: { src: view1Src } },
    { view: { src: view2Src } },
    { view: { src: view3Src } },
    { view: { src: view4Src } },
    { view: { src: view5Src } },
    { view: { src: view6Src } },
    { view: { src: view7Src } }
  ]
};
const puzzleDef = puzzleDef$1;
const Elements = {
  Fpv: {
    CONTAINER: { id: Ids.FPV, type: HTMLElement },
    VIEWER: { id: Ids.FPV_VIEWER, type: HTMLElement },
    SURFACE: { id: Ids.FPV_SURFACE, type: HTMLCanvasElement },
    Controls: {
      FULLSCREEN: { id: Ids.FPV_CONTROL_FULLSCREEN, type: HTMLButtonElement },
      EXPAND: { id: Ids.FPV_CONTROL_EXPAND, type: HTMLButtonElement },
      ZOOM_IN: { id: Ids.FPV_CONTROL_ZOOM_IN, type: HTMLButtonElement },
      ZOOM_OUT: { id: Ids.FPV_CONTROL_ZOOM_OUT, type: HTMLButtonElement }
    }
  },
  Map: {
    CONTAINER: { id: Ids.MAP, type: HTMLElement },
    VIEWER: { id: Ids.MAP_VIEWER, type: HTMLElement },
    PLANE: { id: Ids.MAP_PLANE, type: HTMLElement },
    UI: { id: Ids.MAP_UI, type: SVGSVGElement },
    MEASURE_LAYER: { id: Ids.MAP_MEASURE_LAYER, type: SVGElement },
    PIN_LAYER: { id: Ids.MAP_PIN_LAYER, type: SVGElement },
    Controls: {
      FULLSCREEN: { id: Ids.MAP_CONTROL_FULLSCREEN, type: HTMLButtonElement },
      EXPAND: { id: Ids.MAP_CONTROL_EXPAND, type: HTMLButtonElement },
      ZOOM_IN: { id: Ids.MAP_CONTROL_ZOOM_IN, type: HTMLButtonElement },
      ZOOM_OUT: { id: Ids.MAP_CONTROL_ZOOM_OUT, type: HTMLButtonElement },
      PACE_PIN: { id: Ids.MAP_CONTROL_PLACE_PIN, type: HTMLButtonElement },
      MEASURE_DISTANCE: {
        id: Ids.MAP_CONTROL_MEASURE_DISTANCE,
        type: HTMLButtonElement
      }
    }
  }
};
const init = (document2) => {
  const get = ({
    id,
    type
  }) => getElementByIdOfType(document2, id, type);
  const entriesWithDom = puzzleDef.entries.map((entry, index) => ({
    entry: new Entry2(index, entry.view.src),
    radioButton: get({
      id: radioButtonIdFromEntryIndex(index),
      type: HTMLInputElement
    })
  }));
  const fpvContainer = get(Elements.Fpv.CONTAINER);
  const fpvViewer = get(Elements.Fpv.VIEWER);
  const fpvSurface = get(Elements.Fpv.SURFACE);
  const fpvControlFullscreen = get(Elements.Fpv.Controls.FULLSCREEN);
  const fpvControlExpand = get(Elements.Fpv.Controls.EXPAND);
  const fpvControlZoomIn = get(Elements.Fpv.Controls.ZOOM_IN);
  const fpvControlZoomOut = get(Elements.Fpv.Controls.ZOOM_OUT);
  const mapContainer = get(Elements.Map.CONTAINER);
  const mapViewer = get(Elements.Map.VIEWER);
  const mapPlane = get(Elements.Map.PLANE);
  const mapUi = get(Elements.Map.UI);
  const mapMeasureLayer = get(Elements.Map.MEASURE_LAYER);
  const mapPinLayer = get(Elements.Map.PIN_LAYER);
  const mapControlFullscreen = get(Elements.Map.Controls.FULLSCREEN);
  const mapControlExpand = get(Elements.Map.Controls.EXPAND);
  const mapControlZoomIn = get(Elements.Map.Controls.ZOOM_IN);
  const mapControlZoomOut = get(Elements.Map.Controls.ZOOM_OUT);
  const mapControlPlacePin = get(Elements.Map.Controls.PACE_PIN);
  const mapControlMeasureDistance = get(Elements.Map.Controls.MEASURE_DISTANCE);
  makeEntriesInteractive({
    entriesWithDom,
    fpvContainer,
    fpvViewer,
    fpvSurface,
    fpvControlFullscreen,
    fpvControlExpand,
    fpvControlZoomIn,
    fpvControlZoomOut
  });
  makeMapInteractive({
    container: mapContainer,
    viewer: mapViewer,
    plane: mapPlane,
    ui: mapUi,
    measureLayer: mapMeasureLayer,
    pinLayer: mapPinLayer,
    controlFullscreen: mapControlFullscreen,
    controlExpand: mapControlExpand,
    controlZoomIn: mapControlZoomIn,
    controlZoomOut: mapControlZoomOut,
    controlPlacePin: mapControlPlacePin,
    controlMeasureDistance: mapControlMeasureDistance
  });
};
const getElementByIdOfType = (document2, id, type) => {
  const element = document2.getElementById(id);
  if (element instanceof type) {
    return element;
  }
  return null;
};
init(document);
//# sourceMappingURL=B_MoMJeY.mjs.map
