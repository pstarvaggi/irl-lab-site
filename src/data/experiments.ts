export const shortcutOrShelter = {
  number: "001",
  title: "Shortcut or shelter?",
  subtitle: "The policy boundary in a noisy maze",
  slug: "/experiments/001-shortcut-or-shelter/",
  status: "Analysis pending",
  statusDetail: "Data collected · validation underway",
  date: "August 2026",
  updated: "2026-08-18",
  description:
    "An exposed route is shorter. A protected route is slower. This experiment solves for the reliability at which the preference changes, then tests whether three TD-control methods recover the boundary implied by the objective they learn.",
  methods: ["Q-learning", "SARSA", "Expected SARSA"],
  primaryTrials: 1920,
  sensitivityTrials: 72,
  totalTrials: 1992,
  failedTrials: 0,
  totalTrainingInteractions: 199_200_000,
  gitCommit: "3b53a22323ae44ef776c931648d9f13fa2346a66",
  exactPredictions: [
    {
      hazard: "Recoverable",
      objective: "Greedy",
      boundary: "≈ 0.806",
      note: "Corridor above the boundary",
    },
    {
      hazard: "Recoverable",
      objective: "ε = 0.10 soft",
      boundary: "≈ 0.848",
      note: "Continued exploration moves the boundary",
    },
    {
      hazard: "Lethal",
      objective: "Greedy",
      boundary: "≈ 0.989",
      note: "A narrow transition near perfect execution",
    },
    {
      hazard: "Lethal",
      objective: "ε = 0.10 soft",
      boundary: "No crossing",
      note: "Shelter remains preferred through p = 1",
    },
  ],
  runIds: [
    "shortcut_or_shelter_recoverable-dea8b3bb98-20260818T165653.284759Z",
    "shortcut_or_shelter_lethal-c224eb9e19-20260818T184221.884416Z",
    "shortcut_or_shelter_annealed-7a6ceda8a8-20260818T200356.410162Z",
  ],
} as const;

export const experimentIndex = [shortcutOrShelter] as const;
