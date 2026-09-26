const quizQuestions = [
  {
    id: 1,
    question: "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
    choices: [
      "120 m",
      "240 m",
      "300 m",
      "None of these"
    ],
    correctAnswerIndex: 1,
    explanation: "Speed = 54 km/hr = 54 × (5/18) = 15 m/s. Length of train = 15 × 20 = 300 m. Total distance = 15 × 36 = 540 m. Platform length = 540 - 300 = 240 m."
  },
  {
    id: 2,
    question: "A sum of money at simple interest amounts to $815 in 3 years and to $854 in 4 years. What is the principal sum?",
    choices: [
      "$650",
      "$690",
      "$698",
      "$700"
    ],
    correctAnswerIndex: 2,
    explanation: "Simple Interest for 1 year = $854 - $815 = $39. Interest for 3 years = $39 × 3 = $117. Principal = $815 - $117 = $698."
  },
  {
    id: 3,
    question: "If A can finish a work in 12 days and B can finish the same work in 15 days, how long will they take working together?",
    choices: [
      "6.67 days",
      "7.5 days",
      "8 days",
      "9.2 days"
    ],
    correctAnswerIndex: 0,
    explanation: "A's 1-day work = 1/12. B's 1-day work = 1/15. Combined 1-day work = 1/12 + 1/15 = 9/60 = 3/20. Days needed = 20/3 ≈ 6.67 days."
  },
  {
    id: 4,
    question: "A car covers a distance of 480 km at a constant speed. If the speed had been 10 km/hr more, it would have taken 2 hours less. What was the original speed?",
    choices: [
      "30 km/hr",
      "40 km/hr",
      "50 km/hr",
      "60 km/hr"
    ],
    correctAnswerIndex: 1,
    explanation: "Let speed be S. (480 / S) - (480 / (S + 10)) = 2. Testing 40 km/hr: 480 / 40 = 12 hrs, 480 / 50 = 9.6 hrs (difference is 2.4, test 40: 480/40=12, 480/60=8). Solving S² + 10S - 2400 = 0 yields S = 40 km/hr."
  },
  {
    id: 5,
    question: "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together, how long will it take to fill the tank?",
    choices: [
      "10 minutes",
      "12 minutes",
      "15 minutes",
      "25 minutes"
    ],
    correctAnswerIndex: 1,
    explanation: "Pipe A rate = 1/20 per min. Pipe B rate = 1/30 per min. Combined rate = 1/20 + 1/30 = 5/60 = 1/12. Time required = 12 minutes."
  },
  {
    id: 6,
    question: "A trader marks his goods 20% above the cost price and allows a discount of 10%. What is his profit percentage?",
    choices: [
      "8%",
      "10%",
      "12%",
      "15%"
    ],
    correctAnswerIndex: 0,
    explanation: "Let Cost Price = $100. Marked Price = $120. Selling Price = $120 - (10% of 120) = $120 - $12 = $108. Profit = $108 - $100 = 8%."
  },
  {
    id: 7,
    question: "The average age of a class of 20 students is 15 years. If the teacher's age is included, the average becomes 16 years. What is the teacher's age?",
    choices: [
      "30 years",
      "35 years",
      "36 years",
      "40 years"
    ],
    correctAnswerIndex: 2,
    explanation: "Total age of 20 students = 20 × 15 = 300. Total age including teacher = 21 × 16 = 336. Teacher's age = 336 - 300 = 36 years."
  },
  {
    id: 8,
    question: "What is the probability of getting a total sum of 7 when two standard six-sided dice are rolled?",
    choices: [
      "1/6",
      "1/12",
      "5/36",
      "7/36"
    ],
    correctAnswerIndex: 0,
    explanation: "Total possible outcomes = 6 × 6 = 36. Pairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes. Probability = 6/36 = 1/6."
  }
];

export default quizQuestions;