# 3D-Printed Prosthetic Hand — Body-Powered, Cord-Driven Prototype

**Group 25** · **Team:** Vaibhav Sampat Dighe (2126UMEM1061) · Krushna Uday Bothe (2126UMEM1006) · Tanmay Vijay Matade (2126UMEM1074) · Pranav Dhus (2126UMEM1075)  
**Website:** https://krushnabothe0702-dot.github.io/3D-Printed-Prosthetic-Hand/

A student engineering project at **Sanjivani University**: a low-cost mechanical hand made of 3D-printed parts, cord and elastic. Bending the wrist pulls cords (artificial tendons) that curl the fingers; elastic on the back of each finger opens them again. No motors or batteries.

![The assembled prosthetic hand](media/photos/hand-assembled-top.jpg)

> **Status:** all parts sliced, printed and assembled; tendons routed and tensioned. First tabletop grasp demonstrated — the hand picked up a roll of tape ([video](media/videos/grasp-test.mp4)). Measured testing is next — no grip-strength results are claimed yet.

## Who it is for

![A partial hand with a working wrist](media/photos/partial-hand-motivation.jpg)

A partial-hand limb difference with a working wrist. The remaining wrist movement is what drives this design: bending the wrist pulls the cords and closes the printed fingers.

## How it works

1. **Pull cords (tendons)** run from each fingertip along the palm side, through the palm, to anchors on the gauntlet.
2. **Hinged finger segments** are joined by pins so each finger can curl.
3. **Wrist drive** — the palm pivots on the gauntlet; bending the wrist tightens the cords and closes the fingers.
4. **Elastic return** — red elastic on the back of each finger straightens it when the wrist relaxes.

## Build journey

| Step | What we did | Media |
|---|---|---|
| 1 | Hand sketch with measurements → proposed printable dimensions | [design notes](docs/design-notes.md) |
| 2 | Arranged and sliced all parts | [video](media/videos/slicing-parts.mp4) |
| 3 | 3D-printed the parts (white filament, FDM, with supports) | [video](media/videos/printing-parts.mp4) |
| 4 | Pinned the joints, routed the tendons | [photo](media/photos/assembly-routing-tendons.jpg) |
| 5 | Tied off and tensioned the cords at the gauntlet | [photo](media/photos/assembly-tensioning-cords.jpg) |
| 6 | Complete prototype | [photo](media/photos/hand-gauntlet-underside.jpg) |
| 7 | Checked the finger joints and cord movement | [photo](media/photos/checking-finger-joints.jpg) |
| 8 | First grasp test: picked up a roll of tape (bench, not worn) | [video](media/videos/grasp-test.mp4) |

## CAD model (SOLIDWORKS)

![SOLIDWORKS assembly](media/cad/assembly-isometric.jpg)

- Assembly: [`cad/group 25 hand assembly.SLDASM`](cad/group%2025%20hand%20assembly.SLDASM) with its 16 part files in [`cad/Hand Parts`](cad/Hand%20Parts)
- STEP (no SOLIDWORKS needed): [`cad/group-25-hand-assembly.step`](cad/group-25-hand-assembly.step)
- 29 components, 39 mates, about 117 × 218 × 74 mm overall
- Full parts list: [cad/README.md](cad/README.md)

**Design source:** based on the open-source [e-NABLE Phoenix Hand](https://enablingthefuture.org/phoenix-hand/) ([Thingiverse 1453190](https://www.thingiverse.com/thing:1453190)), licensed CC BY-NC-SA.

## Design dimensions (design values, not as-built)

| Part | Proposed dimension |
|---|---:|
| Palm (width × height × thickness) | 64 × 90 × 12 mm |
| Finger width | 16 mm |
| Finger proximal / distal segment | 55 mm / 35 mm |
| Total finger reach | 90 mm |
| Thumb segments | 38 mm each |
| Hinge holes | ⌀4.3 mm |
| Forearm attachment | 250 mm, separate part |

See [docs/design-notes.md](docs/design-notes.md) for the original sketch measurements and why the finger length was changed.

## Repository layout

```
index.html            Project website (GitHub Pages)
assets/               Website styles, script, icon and share image
media/photos/         Real photographs of the build
media/videos/         Slicing and printing videos
docs/                 Project overview, design notes, build guide
cad/                  SOLIDWORKS assembly, 16 part files, STEP export, parts list
```

## Next steps

- Measured bench test: wrist angle to close all five fingers evenly, and reliable reopening
- More grasp tests with light objects (cup, ball, bottle); record results
- Measure as-built dimensions; add STL files and print settings

## Safety

Educational, non-clinical prototype. Not load-tested, fitted, or reviewed by a prosthetist. Do not use it for heavy loads or wear it on a limb without review by a qualified clinician or engineer.

## Team

| # | Name | PRN |
|---|---|---|
| 1 | Vaibhav Sampat Dighe | 2126UMEM1061 |
| 2 | Krushna Uday Bothe | 2126UMEM1006 |
| 3 | Tanmay Vijay Matade | 2126UMEM1074 |
| 4 | Pranav Dhus | 2126UMEM1075 |

- Project guide: *to be added*
- Sanjivani University
