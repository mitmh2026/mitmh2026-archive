import { r as reactExports, j as jsxRuntimeExports } from "./Cqdl_uWg.mjs";
import { N as NO_COPY_CLASS } from "./8izHJ_gg.mjs";
import { B as Button, f as distExports } from "./CyHnzWK1.mjs";
import { c as cn } from "./8lrfSi8Z.mjs";
import { h } from "./CRmarH58.mjs";
import { t } from "./DGHxrElc.mjs";
const E = {};
const MICROPUZZLE_TO_EXTRACTION_INFO = t({
  bordered: [
    [
      "CATHOLICCHURCHPOPECARDINALSARCHBISHOPSBISHOPSPRIESTSDEACONSLAITY",
      [E, E, E, E, E, { 2: 4 }]
    ],
    [
      "CHESSPIECEVALUEKINGQUEENROOKBISHOPKNIGHTPAWN",
      [E, E, E, E, E, { 2: 13 }]
    ],
    [
      "GRAHAMSHIERARCHYOFDISAGREEMENTREFUTATIONCOUNTERARGUMENTCONTRADICTIONADHOMINEM",
      [E, E, { 4: 11 }]
    ],
    ["HANAFUDAHIKARITANETANZAKUKASU", [{ 2: 10, 5: 9 }]],
    ["HIERARCHYOFCONTROLSELIMINATIONSUBSTITUTIONPPE", [E, { 3: 7, 5: 14 }]],
    [
      "MAFIABOSSCONSIGLIEREUNDERBOSSCAPOREGIMESSOLDIERSASSOCIATES",
      [E, E, E, E, E, { 2: 2 }]
    ],
    [
      "MASLOWSHIERARCHYOFNEEDSSELFACTUALIZATIONESTEEMLOVEANDBELONGINGSAFETYPHYSIOLOGICAL",
      [E, E, E, E, { 0: 15 }]
    ],
    [
      "PEERAGEDUKEDUCHESSMARQUESSMARCHIONESSCOUNTEARLCOUNTESSVISCOUNTVISCOUNTESSBARON",
      [E, E, E, E, E, E, E, E, E, E, { 0: 3, 4: 6 }]
    ],
    ["STRATEGOMARSHALMAJORLIEUTENANTMINERSCOUTSPY", [{ 7: 5 }, E, { 3: 8 }]],
    [
      "THREECARDBRAGPRIALRUNNINGFLUSHRUNFLUSHPAIRHIGHCARD",
      [{ 6: 1, 11: 12 }]
    ]
  ],
  bowled: [
    [
      "CONSTELLATIONSVIRGOZODIACIAUDESIGNATEDCONSTELLATIONS",
      [E, E, { 4: 3 }]
    ],
    ["ITALYAXISPOWERSGROUPOFSEVENGCOUNTRIES", [E, E, { 3: 4 }]],
    ["ELEMENTSCOPPERMETALSOFANTIQUITYMETALSELEMENTS", [E, E, { 12: 1 }]],
    [
      "NUMBERSSEVENNATURALNUMBERSINTEGERSRATIONALNUMBERSREALNUMBERSCOMPLEXNUMBERS",
      [E, E, E, { 6: 6 }]
    ],
    [
      "PARTICLESELECTRONLEPTONSELEMENTARYFERMIONSELEMENTARYPARTICLESSUBATOMICPARTICLESPARTICLES",
      [E, E, E, E, E, { 1: 2 }]
    ],
    [
      "USSTATESMASSACHUSETTSNEWENGLANDCOLONIESTHIRTEENCOLONIESUSSTATES",
      [E, E, { 7: 5 }]
    ]
  ],
  colored: [
    ["BIGMACCHEESE", [{ 5: 9 }]],
    ["BLTBACONTOMATO", [{ 2: 13 }]],
    ["COTTAGEPIESHEPHERDSPIEPOTATOMINCEDMEAT", [{ 0: 1, 9: 3 }]],
    ["HYDROX", [{ 3: 15, 4: 6 }]],
    ["LASAGNAMOZZARELLARICOTTANOODLESAUCE", [{ 5: 12 }]],
    ["OREO", [{ 0: 10, 2: 14 }]],
    ["PANCAKESBUTTERPANCAKE", [{ 3: 4, 5: 5 }]],
    ["PARFAITBERRIESGRANOLAYOGURT", [{ 6: 8 }]],
    ["SUSHISASHIMIRICE", [{ 1: 11, 3: 2 }]],
    ["TIRAMISUMASCARPONELADYFINGERS", [{ 7: 7 }]]
  ],
  rounded: [
    [
      "ATMOSPHEREEXOSPHERETHERMOSPHEREMESOSPHERESTRATOSPHERETROPOSPHERE",
      [{ 7: 6 }]
    ],
    ["COAXIALCABLEJACKETSHIELDINSULATORCONDUCTOR", [{ 4: 9 }]],
    ["DARTBOARDZEROFIFTEENFORTYFIVETWENTYFIVEFIFTY", [E, E, { 6: 7 }]],
    ["CRUSTMANTLEOUTERCOREINNERCORE", []],
    ["EYEPUPILMENINGESOPTICNERVE", [{ 2: 3 }]],
    ["MENINGESDURAMATER", [E, { 7: 11 }]],
    ["PENCILFERRULEPAINTWOODLEADGRAPHITEERASER", [{ 4: 2 }, { 6: 5 }]],
    [
      "RINGSOFSATURNARINGCASSINIDIVISIONBRINGCRINGDRINGSATURN",
      [{ 12: 10 }, { 4: 8 }]
    ],
    ["VIRUSENVELOPECAPSIDGENOME", [{ 4: 1 }, E, E, { 0: 4 }]]
  ],
  trapezoidal: [
    ["ANGLEDEGREEARCMINUTEARCSECOND", [{ 3: 6 }]],
    ["CURRENCYPOUNDSHILLINGPENNY", [E, E, { 0: 1 }]],
    ["MILEYARDFOOTINCH", [E, { 2: 7 }]],
    ["NOTEVALUEWHOLENOTEHALFNOTEQUARTERNOTE", [E, { 0: 4 }]],
    ["TIMEDAYHOURMINUTESECOND", [E, E, E, { 1: 5 }]],
    ["TIMEYEARSMILLENNIUMCENTURYDECADEYEAR", [E, { 9: 3 }]],
    ["VOLUMEGALLONQUARTCUPTABLESPOONTEASPOON", [E, { 1: 2 }, E, E, { 5: 8 }]]
  ]
});
const computeExtractionResult = (puzzleId, micropuzzleIdx, micropuzzleData) => {
  let isSubpuzzleCorrect = false;
  let areAllPuzzlesCorrect = true;
  const entries = MICROPUZZLE_TO_EXTRACTION_INFO[puzzleId] ?? [];
  for (const [i, actualResult] of micropuzzleData.entries()) {
    const [expectedResult] = entries[i] ?? [""];
    if (micropuzzleIdx === i) {
      isSubpuzzleCorrect = expectedResult === actualResult;
    }
    if (expectedResult !== actualResult) {
      areAllPuzzlesCorrect = false;
    }
  }
  return {
    isCorrect: isSubpuzzleCorrect,
    areAllCorrect: areAllPuzzlesCorrect,
    extractionData: areAllPuzzlesCorrect ? entries.map((e) => e[1]) : []
  };
};
const getExtractionChangeMessage = (hasExtraction) => `Extraction data has been ${hasExtraction ? "added" : "removed"}`;
const getValidationMessageForPuzzle = (idx, correct) => `Puzzle ${idx + 1} is ${correct ? "correct" : "incorrect"}.`;
const FieldComponent = ({
  fields,
  extractionInfo,
  inputHandler,
  focusHandler,
  keyDownHandler,
  inputs
}) => {
  const groupItems = (items) => {
    const groups = [];
    let currentGroup = [];
    for (const item of items) {
      if (!item.given) {
        currentGroup.push(item);
      } else {
        if (currentGroup.length > 0) {
          groups.push({ type: "input-group", items: currentGroup });
          currentGroup = [];
        }
        groups.push({ type: "separator", item });
      }
    }
    if (currentGroup.length > 0) {
      groups.push({ type: "input-group", items: currentGroup });
    }
    return groups;
  };
  let extractionIndex = 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexWrap: "wrap" }, children: fields.given ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 46, fontSize: 30 }, children: fields.data }) : groupItems(fields.data).map((group, groupIdx) => {
    if (group.type === "input-group") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: { display: "flex", whiteSpace: "nowrap" },
          children: group.items.map((item, itemIdx) => {
            const inputKey = item.given ? String(itemIdx) : item.id;
            const extractionId = extractionInfo === void 0 ? void 0 : extractionInfo[extractionIndex++];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: { display: "inline-block", textAlign: "center" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      "data-blank-input": "true",
                      "data-char-id": inputKey,
                      style: {
                        width: 28,
                        height: 28,
                        fontSize: 16,
                        textAlign: "center",
                        outlineOffset: -3,
                        border: extractionId ? "2px solid red" : void 0
                      },
                      type: "text",
                      maxLength: 1,
                      value: inputs[inputKey] || "",
                      onChange: (e) => {
                        inputHandler(e, inputKey);
                      },
                      onFocus: focusHandler,
                      onKeyDown: (e) => {
                        keyDownHandler(e, inputKey);
                      },
                      placeholder: item.linked ? String(item.displayedId) : "_"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      style: {
                        height: 16,
                        fontSize: 16,
                        color: "red",
                        marginBottom: 8
                      },
                      children: extractionId || ""
                    }
                  )
                ]
              },
              itemIdx
            );
          })
        },
        groupIdx
      );
    } else {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: { display: "inline-block", textAlign: "center" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: { display: "inline-block", width: 30, height: 30 },
                // Use non-breaking space (\u00A0) to ensure space characters are visible in the UI,
                // as regular spaces may collapse or be ignored in HTML rendering.
                children: group.item.displayedChar === " " ? " " : group.item.displayedChar
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  height: 16,
                  fontSize: 16,
                  color: "red",
                  marginBottom: 8
                }
              }
            )
          ]
        },
        groupIdx
      );
    }
  }) });
};
const PuzzleComponent = ({
  id,
  data,
  checkSlug = "layers"
}) => {
  const [inputs, setInputs] = reactExports.useState({});
  const [overallPuzzleAria, setOverallPuzzleAria] = reactExports.useState();
  const [ariaLabels, setAriaLabels] = reactExports.useState(
    new Array(data.length).fill("")
  );
  const [extractionInfo, setExtractionInfo] = reactExports.useState([]);
  const [verifiedPuzzles, setVerifiedPuzzles] = reactExports.useState(
    /* @__PURE__ */ new Set()
  );
  const [failedInputs, setFailedInputs] = reactExports.useState({});
  const pendingChecksRef = reactExports.useRef(/* @__PURE__ */ new Set());
  const [pendingChecks, setPendingChecks] = reactExports.useState(/* @__PURE__ */ new Set());
  const readyMicropuzzleRef = reactExports.useRef();
  const extractionCacheRef = reactExports.useRef(
    /* @__PURE__ */ new Map()
  );
  const circledNumbers = "①②③④⑤⑥⑦⑧⑨⑩⑪";
  const puzzleBlankIds = reactExports.useMemo(() => {
    const idMap = {};
    data.forEach((puzzle, puzzleIdx) => {
      const ids = [];
      if (!puzzle.title.given) {
        puzzle.title.data.forEach((blank) => {
          if (!blank.given) ids.push(blank.id);
        });
      }
      puzzle.fields.forEach((field) => {
        if (!field.given) {
          field.data.forEach((blank) => {
            if (!blank.given) ids.push(blank.id);
          });
        }
      });
      idMap[puzzleIdx] = ids;
    });
    return idMap;
  }, [data]);
  reactExports.useEffect(() => {
    const saveKey = `layers-answers-${id}`;
    const savedInputs = localStorage.getItem(saveKey);
    if (savedInputs) {
      try {
        const input = JSON.parse(savedInputs);
        setInputs(input);
      } catch (e) {
        console.error("Failed to load saved inputs:", e);
      }
    }
  }, [id]);
  reactExports.useEffect(() => {
    const saveKey = `layers-answers-${id}`;
    localStorage.setItem(saveKey, JSON.stringify(inputs));
  }, [id, inputs]);
  const getMicropuzzleContentString = reactExports.useCallback(
    (puzzleIdx) => {
      const ids = puzzleBlankIds[puzzleIdx];
      if (!ids) return "";
      return ids.map((id2) => inputs[id2] || "").join("");
    },
    [inputs, puzzleBlankIds]
  );
  const unverifyPuzzle = reactExports.useCallback((puzzleIdx) => {
    let removed = false;
    setVerifiedPuzzles((prev) => {
      if (!prev.has(puzzleIdx)) {
        return prev;
      }
      removed = true;
      const res = new Set(prev);
      res.delete(puzzleIdx);
      return res;
    });
    if (!removed) {
      return;
    }
    setExtractionInfo((_) => []);
    setAriaLabels((prev) => {
      const res = [...prev];
      const newMessage = getValidationMessageForPuzzle(puzzleIdx, false);
      res[puzzleIdx] = newMessage;
      return res;
    });
    setOverallPuzzleAria((prev) => {
      const newMessage = getExtractionChangeMessage(false);
      if (prev === "" || prev === void 0) {
        return prev;
      }
      return newMessage;
    });
  }, []);
  const applyExtractionResult = reactExports.useCallback(
    (puzzleIdx, micropuzzleData, result) => {
      if (!result.isCorrect) {
        setFailedInputs((prev) => ({
          ...prev,
          [puzzleIdx]: micropuzzleData[puzzleIdx]
        }));
        unverifyPuzzle(puzzleIdx);
        return;
      }
      setExtractionInfo((_) => result.extractionData);
      setOverallPuzzleAria((prev) => {
        const hasExtraction = result.extractionData.length !== 0;
        if (prev !== "" && prev !== void 0) {
          return getExtractionChangeMessage(hasExtraction);
        } else if (hasExtraction) {
          return getExtractionChangeMessage(true);
        }
        return prev;
      });
      setVerifiedPuzzles((prev) => new Set(prev).add(puzzleIdx));
      setAriaLabels((prev) => {
        const res = [...prev];
        res[puzzleIdx] = getValidationMessageForPuzzle(puzzleIdx, true);
        return res;
      });
    },
    [unverifyPuzzle]
  );
  const fetchExtractionInfo = reactExports.useCallback(
    (puzzleIdx, micropuzzleData) => {
      const cacheKey = `${id}:${checkSlug}:${puzzleIdx}:${JSON.stringify(
        micropuzzleData
      )}`;
      const cached = extractionCacheRef.current.get(cacheKey);
      if (cached) {
        applyExtractionResult(puzzleIdx, micropuzzleData, cached);
        return;
      }
      if (pendingChecksRef.current.has(puzzleIdx)) {
        return;
      }
      pendingChecksRef.current.add(puzzleIdx);
      setPendingChecks(new Set(pendingChecksRef.current));
      const result = computeExtractionResult(
        id,
        puzzleIdx,
        micropuzzleData
      );
      extractionCacheRef.current.set(cacheKey, result);
      applyExtractionResult(puzzleIdx, micropuzzleData, result);
      pendingChecksRef.current.delete(puzzleIdx);
      setPendingChecks(new Set(pendingChecksRef.current));
    },
    [applyExtractionResult, checkSlug, id]
  );
  const readyMicropuzzle = reactExports.useMemo(() => {
    var _a;
    for (const puzzleIdxStr in puzzleBlankIds) {
      const puzzleIdx = Number(puzzleIdxStr);
      const ids = puzzleBlankIds[puzzleIdx];
      if (!(ids == null ? void 0 : ids.length)) {
        continue;
      }
      const allFilled = ids.every(
        (id2) => inputs[id2] && inputs[id2].trim() !== ""
      );
      if (!allFilled) {
        continue;
      }
      if (verifiedPuzzles.has(puzzleIdx)) {
        continue;
      }
      const inputString = ids.map((id2) => inputs[id2] || "").join("");
      if (failedInputs[puzzleIdx] === inputString) {
        continue;
      }
      const expectedHash = (_a = data[puzzleIdx]) == null ? void 0 : _a.expectedHash;
      if (!expectedHash) {
        continue;
      }
      const hash = h.hashStr(inputString);
      if (hash !== expectedHash) {
        continue;
      }
      const micropuzzleData = data.map(
        (_, idx) => getMicropuzzleContentString(idx)
      );
      return {
        key: `${puzzleIdx}:${inputString}`,
        puzzleIdx,
        micropuzzleData
      };
    }
    return void 0;
  }, [
    data,
    failedInputs,
    getMicropuzzleContentString,
    inputs,
    puzzleBlankIds,
    verifiedPuzzles
  ]);
  readyMicropuzzleRef.current = readyMicropuzzle;
  reactExports.useEffect(() => {
    var _a;
    for (const puzzleIdx of verifiedPuzzles) {
      const ids = puzzleBlankIds[puzzleIdx];
      if (!(ids == null ? void 0 : ids.length)) {
        continue;
      }
      const allFilled = ids.every(
        (id2) => inputs[id2] && inputs[id2].trim() !== ""
      );
      if (!allFilled) {
        unverifyPuzzle(puzzleIdx);
        continue;
      }
      const inputString = ids.map((id2) => inputs[id2] || "").join("");
      const expectedHash = (_a = data[puzzleIdx]) == null ? void 0 : _a.expectedHash;
      if (expectedHash) {
        const hash = h.hashStr(inputString);
        if (hash !== expectedHash) {
          unverifyPuzzle(puzzleIdx);
        }
      }
    }
  }, [inputs, puzzleBlankIds, verifiedPuzzles, data, unverifyPuzzle]);
  const readyMicropuzzleKey = readyMicropuzzle == null ? void 0 : readyMicropuzzle.key;
  reactExports.useEffect(() => {
    if (!readyMicropuzzleKey) {
      return;
    }
    const current = readyMicropuzzleRef.current;
    if ((current == null ? void 0 : current.key) !== readyMicropuzzleKey) {
      return;
    }
    try {
      fetchExtractionInfo(current.puzzleIdx, current.micropuzzleData);
    } catch (error) {
      console.error(
        `Failed to fetch extraction info for puzzleIdx ${current.puzzleIdx}:`,
        error
      );
    }
  }, [readyMicropuzzleKey, fetchExtractionInfo]);
  const exportState = () => {
    const exportObject = {
      puzzleId: id,
      inputs
    };
    const exportString = JSON.stringify(exportObject);
    navigator.clipboard.writeText(exportString).then(() => {
      alert("Copied to clipboard.");
    }).catch((e) => {
      console.error(e);
      alert("Failed to copy to clipboard.");
    });
  };
  const importState = (overwriteAll = false) => {
    const userInput = prompt("Enter state:");
    if (!userInput) {
      return;
    }
    try {
      const importObject = JSON.parse(userInput);
      if (importObject.puzzleId !== id) {
        alert("Error: Imported answers do not match the current puzzle.");
        return;
      }
      setInputs(() => {
        const newInputs = overwriteAll ? {} : { ...inputs };
        for (const key in importObject.inputs) {
          if (Object.hasOwn(importObject.inputs, key) && typeof importObject.inputs[key] === "string" && importObject.inputs[key].length > 0 && (overwriteAll || !(key in inputs) || inputs[key] === void 0 || inputs[key].trim() === "")) {
            newInputs[key] = importObject.inputs[key].charAt(0);
          }
        }
        return newInputs;
      });
    } catch {
      alert("Error: Invalid import data.");
    }
  };
  const importStateAll = () => {
    importState(true);
  };
  const importStateEmptyOnly = () => {
    importState(false);
  };
  const handleInput = (event, charId) => {
    const value = event.target.value;
    if (value && value.trim() !== "") {
      const upperValue = value.toUpperCase();
      setInputs((prev) => ({ ...prev, [charId]: upperValue }));
      event.target.value = upperValue;
      setTimeout(() => {
        const inputs2 = Array.from(
          document.querySelectorAll('[data-blank-input="true"]')
        );
        const currentIndex = inputs2.indexOf(event.target);
        if (currentIndex >= 0 && currentIndex < inputs2.length - 1) {
          const nextInput = inputs2[currentIndex + 1];
          nextInput.focus();
          if (nextInput.value) {
            nextInput.select();
          }
        }
      }, 0);
    } else {
      setInputs((prev) => {
        if (!(charId in prev)) return prev;
        const { [charId]: _removed, ...rest } = prev;
        return rest;
      });
    }
  };
  const handleFocus = (event) => {
    if (event.target.value) {
      event.target.select();
    }
  };
  const handleKeyDown = (event, _) => {
    if (event.key !== "Backspace") {
      return;
    }
    const currentInput = event.currentTarget;
    if (currentInput.value === "") {
      event.preventDefault();
      const inputs2 = Array.from(
        document.querySelectorAll('[data-blank-input="true"]')
      );
      const currentIndex = inputs2.indexOf(currentInput);
      if (currentIndex > 0) {
        const prevInput = inputs2[currentIndex - 1];
        const prevCharId = prevInput.getAttribute("data-char-id");
        if (prevCharId) {
          setInputs((prev) => {
            if (!(prevCharId in prev)) return prev;
            const { [prevCharId]: _removed, ...rest } = prev;
            return rest;
          });
        }
        prevInput.focus();
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: importStateAll, children: "Import" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: importStateEmptyOnly, children: "Import (Overwrite only empty cells)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: exportState, children: "Export" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `sr-only ${NO_COPY_CLASS}`, "aria-live": "polite", children: overallPuzzleAria }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    data.map((puzzle, puzzleIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          width: "100%",
          marginTop: 24,
          padding: verifiedPuzzles.has(puzzleIdx) ? 10 : 15,
          border: verifiedPuzzles.has(puzzleIdx) ? "6px solid" : "1px solid",
          borderColor: verifiedPuzzles.has(puzzleIdx) ? "#00CC00" : "black",
          display: "flex",
          flexDirection: "column"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `sr-only ${NO_COPY_CLASS}`, "aria-live": "polite", children: ariaLabels[puzzleIdx] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "row"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      minWidth: 0,
                      flex: 1
                    },
                    children: puzzle.title && (!puzzle.title.given || puzzle.title.data.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 24, display: "flex" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FieldComponent,
                      {
                        fields: puzzle.title,
                        extractionInfo: extractionInfo[puzzleIdx] === void 0 ? void 0 : extractionInfo[puzzleIdx][0],
                        inputHandler: handleInput,
                        focusHandler: handleFocus,
                        keyDownHandler: handleKeyDown,
                        inputs
                      }
                    ) })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      marginLeft: 20,
                      marginTop: 8,
                      width: 40,
                      textAlign: "right"
                    },
                    children: (verifiedPuzzles.has(puzzleIdx) ? distExports.parse("✅") : pendingChecks.has(puzzleIdx) ? distExports.parse("⏳") : distExports.parse("❌")).map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: e.url,
                        alt: e.text,
                        className: cn(NO_COPY_CLASS, "inline-block align-middle")
                      },
                      e.text
                    ))
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: { width: "100%" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: {
                  width: 300,
                  height: 300,
                  marginRight: 16,
                  flexShrink: 0
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    style: {
                      objectFit: "contain",
                      objectPosition: "0% 0%",
                      width: "100%",
                      height: "100%"
                    },
                    src: puzzle.imageSrc,
                    alt: puzzle.alt
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: 1, minWidth: 0 }, children: puzzle.fields.map((fields, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 24, display: "flex" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginRight: "10px" }, children: [
                circledNumbers[i],
                ":"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FieldComponent,
                {
                  fields,
                  extractionInfo: extractionInfo[puzzleIdx] === void 0 ? void 0 : extractionInfo[puzzleIdx][i + 1],
                  inputHandler: handleInput,
                  focusHandler: handleFocus,
                  keyDownHandler: handleKeyDown,
                  inputs
                }
              )
            ] }, i)) })
          ] })
        ]
      },
      puzzleIdx
    ))
  ] });
};
function createGivenBlank(blank) {
  return {
    given: true,
    linked: false,
    id: null,
    displayedId: null,
    displayedChar: blank
  };
}
function createLinkedItem(id, displayedId) {
  return {
    given: false,
    linked: true,
    id,
    displayedId,
    displayedChar: null
  };
}
function createUnlinkedItem(id) {
  return {
    given: false,
    linked: false,
    id,
    displayedId: null,
    displayedChar: null
  };
}
function processData(puzzle) {
  const parsedMicropuzzles = [];
  const rawIdToId = {};
  const idToDisplayedId = {};
  let displayedIdCounter = 1;
  const processBlank = (blank, id) => {
    if (typeof blank === "string") {
      return createGivenBlank(blank);
    } else if (blank > 0) {
      if (blank in rawIdToId) {
        id = rawIdToId[blank];
        const displayedId = idToDisplayedId[id];
        return createLinkedItem(id, displayedId);
      } else {
        const displayedId = displayedIdCounter++;
        rawIdToId[blank] = id;
        idToDisplayedId[id] = displayedId;
        return createLinkedItem(id, displayedId);
      }
    } else {
      return createUnlinkedItem(id);
    }
  };
  const processField = (field, puzzleId, fieldId) => {
    if (typeof field === "string") {
      return { given: true, data: field };
    }
    let blankIndex = 1;
    const fieldData = field.map((item) => {
      const id = `p${puzzleId}f${fieldId}b${blankIndex++}`;
      return processBlank(item, id);
    });
    return { given: false, data: fieldData };
  };
  for (let puzzleIdx = 0; puzzleIdx < puzzle.length; puzzleIdx++) {
    const micropuzzle = puzzle[puzzleIdx];
    const processedTitle = processField(micropuzzle.title, puzzleIdx, 0);
    const processedFields = micropuzzle.fields.map(
      (field, i) => processField(field, puzzleIdx, i + 1)
    );
    parsedMicropuzzles.push({
      imageSrc: micropuzzle.imageSrc,
      alt: micropuzzle.alt,
      title: processedTitle,
      fields: processedFields,
      expectedHash: micropuzzle.expectedHash
    });
  }
  return parsedMicropuzzles;
}
export {
  PuzzleComponent as P,
  processData as p
};
//# sourceMappingURL=Dc4MrPm0.mjs.map
