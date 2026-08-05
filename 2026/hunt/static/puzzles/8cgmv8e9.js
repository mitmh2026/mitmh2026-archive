import { c as clientExports, j as jsxRuntimeExports } from "./Cqdl_uWg.js";
import { c as QATaskComponent } from "./CPm4UabO.js";
const kavli_institute_above = "/2026/hunt/static/puzzles/assets/c178be83ae53ea29.png";
const kavli_institute_ahead = "/2026/hunt/static/puzzles/assets/839e5710d9052f3f.png";
const kavli_institute_behind = "/2026/hunt/static/puzzles/assets/0c1a9f98bcfe46c3.png";
const MAX_DISTANCE = 0.05;
const LOBBY_7_CENTER = {
  lat: 42.35916956887142
};
function getGeoDistance(coord1, coord2) {
  const R = 6371;
  const dLat = toRad(coord2.lat - coord1.lat);
  const dLon = toRad(coord2.lon - coord1.lon);
  const lat1 = toRad(coord1.lat);
  const lat2 = toRad(coord2.lat);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
function toRad(degrees) {
  return degrees * (Math.PI / 180);
}
function parseCoordinates(input) {
  const cleanInput = input.replace(/[()]/g, "").trim();
  const parts = cleanInput.split(/[, \s]+/).filter(Boolean);
  if (parts.length !== 2) {
    return `Error: Expected 2 values, found ${parts.length}. Input format should be 'lat, lon' or 'lat lon'.`;
  }
  const lat = parseFloat(parts[0]);
  const lon = parseFloat(parts[1]);
  if (isNaN(lat) || isNaN(lon)) {
    return "Error: Coordinates contain invalid numbers.";
  }
  if (lat < -90 || lat > 90) {
    return `Error: Latitude ${lat} is out of bounds (must be between -90 and 90).`;
  }
  if (lon < -180 || lon > 180) {
    return `Error: Longitude ${lon} is out of bounds (must be between -180 and 180).`;
  }
  return { lat, lon };
}
function getAnswer(id) {
  const answer = JETLAG_TASK.answer_options.find((answer2) => answer2.id === id);
  if (answer === void 0) {
    throw new Error(`Answer with id ${id} not found.`);
  }
  return answer;
}
function fillTemplate(template, values) {
  return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
    return values[key] !== void 0 ? values[key] : match;
  });
}
const LANDMARKS = {
  "Aesop's Fables, II": {
    lat: 42.361347681572305,
    lon: -71.08945298781337
  },
  Alchemist: {
    lat: 42.359118146169706,
    lon: -71.09403152880128
  },
  "For Marjorie": {
    lat: 42.35480826086804,
    lon: -71.10267405624346
  },
  "TV Man or Five Piece Cube with Strange Hole": {
    lat: 42.358882001540174,
    lon: -71.08906747001318
  }
};
const JETLAG_TASK = {
  answer_options: [
    {
      // Kavli Institute
      id: "jet_lag_11",
      properties: {
        building_num: 37,
        // 37
        relative_to_mass_ave: "east",
        residential: false,
        location: { lat: 42.36069955844825, lon: -71.09325476753256 },
        photo_above: kavli_institute_above,
        photo_behind: kavli_institute_behind,
        photo_ahead: kavli_institute_ahead,
        street_name: "Vassar Street",
        building_opening: 1986,
        nearest_shuttle: "Vassar St / Mass Ave",
        google_review_rating: 5,
        nearest_pogo_gym: "The Apple Tree at MIT",
        minutes_walking_from_the_stud: 5
      }
    }
  ],
  questions: [
    {
      id: "photo_ahead",
      question_template: "Send a photo of what is in front of you. (60 seconds)",
      cost: 60,
      response_function: (id) => {
        const answer = getAnswer(id);
        return { image: answer.properties.photo_ahead };
      }
    },
    {
      id: "photo_above",
      question_template: "Send a photo of what is above you. (60 seconds)",
      cost: 60,
      response_function: (id) => {
        const answer = getAnswer(id);
        return { image: answer.properties.photo_above };
      }
    },
    {
      id: "photo_behind",
      question_template: "Send a photo of what is behind you. (60 seconds)",
      cost: 60,
      response_function: (id) => {
        const answer = getAnswer(id);
        return { image: answer.properties.photo_behind };
      }
    },
    {
      id: "building_parity",
      question_template: "Is the numerical part of your location's MIT building number even or odd? (10 seconds)",
      cost: 10,
      response_function: (id) => {
        const answer_template = "The numerical part of my building's MIT building number is {{building_parity}}.";
        const invalid_response = "My location is not associated with a building with a number.";
        const answer = getAnswer(id);
        if (answer.properties.building_num === void 0) {
          return { error: invalid_response };
        }
        const building_num = answer.properties.building_num;
        const building_parity = building_num % 2 === 0 ? "even" : "odd";
        return { message: fillTemplate(answer_template, { building_parity }) };
      }
    },
    {
      id: "relative_to_mass_ave",
      question_template: "Are you east or west of Massachusetts Avenue? (10 seconds)",
      cost: 10,
      response_function: (id) => {
        const answer_template = "I am {{relative_to_mass_ave}} of Massachusetts Avenue.";
        const answer = getAnswer(id);
        return {
          message: fillTemplate(answer_template, {
            relative_to_mass_ave: answer.properties.relative_to_mass_ave
          })
        };
      }
    },
    {
      id: "residential",
      question_template: "Is your location associated with a residential building? (15 seconds)",
      cost: 15,
      response_function: (id) => {
        const answer_template = "My location is {{residential}} with a residential building.";
        const answer = getAnswer(id);
        return {
          message: fillTemplate(answer_template, {
            residential: answer.properties.residential ? "associated" : "not associated"
          })
        };
      }
    },
    {
      // https://www.pogomap.info/
      id: "nearest_pogo_gym",
      question_template: "What is the name of the nearest PoGo Gym? (15 seconds)",
      cost: 15,
      response_function: (id) => {
        const answer_template = "The nearest PoGo Gym is {{nearest_pogo_gym}}.";
        const answer = getAnswer(id);
        return {
          message: fillTemplate(answer_template, {
            nearest_pogo_gym: answer.properties.nearest_pogo_gym
          })
        };
      }
    },
    {
      id: "building_opening",
      question_template: "Is your building older or younger than Mystery Hunt (base the age of the building on the opening year of its most recent renovation)? (10 seconds)",
      cost: 10,
      response_function: (id) => {
        const answer_template = "My building is {{older}} than Mystery Hunt.";
        const answer = getAnswer(id);
        const building_opening = answer.properties.building_opening;
        return {
          message: fillTemplate(answer_template, {
            older: building_opening < 1981 ? "older" : "younger"
          })
        };
      }
    },
    {
      // https://web.mit.edu/facilities/transportation/shuttles/schedules/tech.pdf
      id: "nearest_shuttle",
      question_template: "What is the name of the nearest Tech Shuttle stop? (15 seconds)",
      cost: 15,
      response_function: (id) => {
        const answer_template = "The nearest shuttle stop is {{nearest_shuttle}}.";
        const answer = getAnswer(id);
        return {
          message: fillTemplate(answer_template, {
            nearest_shuttle: answer.properties.nearest_shuttle
          })
        };
      }
    },
    {
      id: "google_review_rating",
      question_template: "Is your building's Google reviews rating above 4.6? (10 seconds)",
      cost: 10,
      response_function: (id) => {
        const answer_template = "My building {{comparison}} a Google reviews rating above 4.6.";
        const answer = getAnswer(id);
        const comparison = answer.properties.google_review_rating > 4.6 ? "has" : "does not have";
        return {
          message: fillTemplate(answer_template, {
            comparison
          })
        };
      }
    },
    {
      id: "relative_distance",
      question_template: "Are you within 300m of {{landmark}}? (20 seconds)",
      cost: 20,
      question_content: {
        landmark: [
          "Aesop's Fables, II",
          "Alchemist",
          "For Marjorie",
          "TV Man or Five Piece Cube with Strange Hole"
        ]
      },
      response_function: (id, parameters) => {
        const answer_template = "I am {{conclusion}} 300m of {{landmark}}.";
        const landmark_location = LANDMARKS[parameters.landmark];
        const answer = getAnswer(id);
        const relative_distance = getGeoDistance(
          answer.properties.location,
          landmark_location
        );
        const conclusion = relative_distance < 0.3 ? "within" : "not within";
        return {
          message: fillTemplate(answer_template, {
            conclusion,
            landmark: parameters.landmark
          })
        };
      }
    },
    {
      id: "street_name",
      question_template: "What is the street name of your building's address? (30 seconds)",
      cost: 30,
      response_function: (id) => {
        const answer = getAnswer(id);
        return { message: answer.properties.street_name };
      }
    },
    {
      id: "minutes_walking_from_the_stud",
      question_template: "Are you within a ten minute walk from the Student Center? (20 seconds)",
      cost: 20,
      response_function: (id) => {
        const answer_template = "I {{is_closer}} a ten minute walk from the Student Center.";
        const answer = getAnswer(id);
        const isCloser = answer.properties.minutes_walking_from_the_stud <= 10;
        return {
          message: fillTemplate(answer_template, {
            is_closer: isCloser ? "am" : "am not"
          })
        };
      }
    },
    {
      id: "north_or_south_of_lobby_7",
      question_template: "Are you north or south of the center of Lobby 7? (20 seconds)",
      cost: 20,
      response_function: (id) => {
        const answer_template = "I am {{isNorth}} of the center of Lobby 7.";
        const answer = getAnswer(id);
        const isNorth = answer.properties.location.lat > LOBBY_7_CENTER.lat;
        return {
          message: fillTemplate(answer_template, {
            isNorth: isNorth ? "north" : "south"
          })
        };
      }
    }
  ],
  validate_submission: (id, submission) => {
    const answer = getAnswer(id);
    const coordinates = parseCoordinates(submission);
    if (typeof coordinates === "string") {
      return coordinates;
    }
    const distance = getGeoDistance(
      coordinates,
      answer.properties.location
    );
    return distance <= MAX_DISTANCE;
  },
  validation_cooldown: 45,
  retry_cooldown: 0
};
const jet_lag_elem = document.getElementById("jet-lag-root");
if (jet_lag_elem) {
  const root = clientExports.createRoot(jet_lag_elem);
  root.render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      QATaskComponent,
      {
        taskSlug: "hide_and_seek_mit",
        submissionSubtext: "Where am I hiding? Enter coordinates in the format: latitude, longitude. You will get credit as long as you are within 50 meters of the correct location.",
        completionButtonText: "You found me!",
        localTask: JETLAG_TASK
      }
    )
  );
} else {
  console.error(
    "Could not mount because #jet-lag-root was nowhere to be found"
  );
}
//# sourceMappingURL=8cgmv8e9.js.map
