# Design notes

## 1. Original sketch measurements

The project started from a hand-drawn sketch of the palm, fingers and a forearm section. The measurements read from it were:

| Part | Measurement |
|---|---:|
| Forearm section | 25 cm (250 mm) |
| Palm height | 9 cm (90 mm) |
| Palm width | 6.4 cm (64 mm) |
| Finger length (as drawn) | 20 cm (200 mm) |
| Finger spread / height | 10 cm (100 mm) |

Some values may be misread because of the drawing's orientation.

## 2. Proposed printable dimensions

A literal 200 mm finger is far longer than a human finger, so the printable starting point uses about 90 mm of finger reach.

| Part | Proposed dimension |
|---|---:|
| Palm (width × height × thickness) | 64 × 90 × 12 mm |
| Finger width | 16 mm |
| Finger proximal segment | 55 mm |
| Finger distal segment | 35 mm |
| Total finger reach | 90 mm (55 + 35) |
| Thumb segments | 38 mm each |
| Hinge holes | ⌀4.3 mm |
| Forearm attachment | 250 mm, designed as a separate part |

The forearm attachment is kept separate so its length and fit can change without reprinting the palm.

These are **design values**. The as-built hand has not been measured yet.

## 3. Control method

Mechanical strings operated by wrist movement (body-powered). No servos or electronics.

- **Pull cord:** one cord per finger, running along the palm side, pulls the finger inward.
- **Hinges:** pins between printed segments let each finger bend.
- **Return:** light elastic on the back of each finger reopens it when the pull is released.
- **Wrist drive:** bending the wrist tightens the cords; this linkage needs its own testing and tuning.

## 4. Materials

- Printed parts: white filament, FDM printing (PLA is recommended for first fit-checks)
- Tendons: braided cord
- Return: elastic cord / bands
- Pins: printed pins or suitable small bolts; no sharp exposed ends

## Team

3D-Printed Prosthetic Hand — student project, Sanjivani University

| # | Name | PRN |
|---|---|---|
| 1 | Vaibhav Sampat Dighe | 2126UMEM1061 |
| 2 | Krushna Uday Bothe | 2126UMEM1006 |
| 3 | Tanmay Vijay Matade | 2126UMEM1074 |
| 4 | Pranav Dhus | 2126UMEM1075 |

Project guide: *to be added*
