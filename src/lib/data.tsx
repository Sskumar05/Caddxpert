import g1 from "@/assets/cad_img1.png";
import g2 from "@/assets/cad_img2.png";
import g3 from "@/assets/cad_img3.png";
import g4 from "@/assets/cad_img4.png";
import g5 from "@/assets/cad_img5.png";
import g7 from "@/assets/cad_img7.png";
import g8 from "@/assets/cad_img8.png";
import g9 from "@/assets/cad_img9.png";
import g10 from "@/assets/cad_img10.png";
import g11 from "@/assets/cad_img11.png";

import imgAutocad from "@/assets/courses/autocad.png";
import imgCivil from "@/assets/courses/civil_cad.png";
import imgMech from "@/assets/courses/mechanical_cad.png";
import imgElec from "@/assets/courses/electrical_cad.png";
import imgRevit from "@/assets/courses/revit.png";
import imgStaad from "@/assets/courses/staad_pro.png";
import imgCatia from "@/assets/courses/catia.png";
import imgSolidworks from "@/assets/courses/solidworks.png";
import imgPython from "@/assets/courses/python.jpg";
import imgFullStack from "@/assets/courses/full_stack.jpg";
import imgDataScience from "@/assets/courses/data_science.jpg";
import imgTally from "@/assets/courses/tally.jpg";

export const courseCategories = [
  { slug: "civil-courses", name: "Civil & Architecture", desc: "Architectural design, drafting, and structural engineering.", image: imgAutocad },
  { slug: "mechanical-courses", name: "Mechanical & Aerospace", desc: "Mechanical design, manufacturing, and product development.", image: imgCivil },
  { slug: "mep-courses", name: "MEP, Piping & Plant", desc: "Building services, piping, and plant engineering.", image: imgMech },
  { slug: "enterprise-courses", name: "Enterprise Resource Planning", desc: "Business process management with ERP solutions.", image: imgElec },
  { slug: "project-courses", name: "Project Management", desc: "Planning, scheduling, and project execution.", image: imgElec },
  { slug: "finance-courses", name: "Finance & Accounting", desc: "Accounting, taxation, and financial management.", image: imgFullStack },
  { slug: "general-courses", name: "General CAD & QA", desc: "CAD drafting and quality assurance fundamentals.", image: imgTally },
  { slug: "data-courses", name: "Data Analytics & Reporting", desc: "Data analysis, visualization, and business reporting.", image: imgTally },
  { slug: "electrical-courses", name: "Electrical & Electronics", desc: "Electrical design and industrial automation.", image: imgTally },
  { slug: "digital-courses", name: "Digital Marketing", desc: "SEO, social media, and online marketing strategies.", image: imgTally },

];


export interface CourseModule {
  title: string;
  learns: string[];
}

export interface Course {
  slug: string;
  categorySlug: string;
  name: string;
  desc: string;
  duration?: string;
  cat?: string;
  image?: string;
  details?: string;
  learns?: string[];
  modules?: CourseModule[];
}

export const courses: Course[] = [

  {
    slug: "Design Visualization Essential", categorySlug: "civil-courses", name: "Design Visualization Essential", desc: "Part modeling, assembly & drafting.", duration: "3 Months", cat: "Mech", image: imgMech,
    details: "Focuses on using mathematical and programming tools to create dynamic 3D designs, structuring the entire architectural design workflow. This course bridges the gap between pure raw creative concept and structural geometry.",
    learns: [
      "Geometric Primitives",
      "Transforming Objects",
      "Modifiers",
      "Slate Material Editor",
      "Photometric Lights",
      "Particle Systems",
      "Space warps",
      "Environment Effects",
      "Daylight Rendering",
      "Animation Creation",
    ]
  },

  {
    slug: "V-Ray Essential", categorySlug: "civil-courses", name: "V-Ray Essential", desc: "Advanced surface & product design.", duration: "3 Months", cat: "Mech", image: imgCatia,
    details: "Teaches you how to transform 3D models into highly realistic rendered images for advanced surface and product design. It teaches you master-level lighting, texture mapping, and material reflections for photo-realistic client presentations.",
    learns: [
      "V-Ray Rendering Engines",
      "V-Ray Image Sampling Techniques",
      "V-Ray Lights",
      "Global Illumination for Exterior Scenes",
      "Global Illumination for Interior Scenes",
      "V-Ray Physical Camera",
      "V-Ray Materials",
      "V-Ray Aerial Perspective",
      "V-Ray Objects",
      "V-Ray Render Elements",
    ]
  },

  {
    slug: "SketchUp Essential", categorySlug: "civil-courses", name: "SketchUp Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Helps you easily turn basic architectural concepts into 3D models to quickly visualize building ideas. An excellent beginner-friendly tool for rapid prototyping and generating quick structural spatial layouts.",
    learns: [
      "Inference Techniques",
      "Modeling Entities,",
      "Push/Pull Modification",
      "Object Editing",
      "Measurement & Annotation",
      "Match photo modeling",
      "Components: General & Dynamic",
      "Modeling from DWG",
      "Model visualization",
      "Model documentation",
    ]
  },

  {
    slug: "Revit Architecture Essential", categorySlug: "civil-courses", name: "Revit Architecture Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Uses Building Information Modeling (BIM) to generate highly accurate 3D architectural models and detailed blueprints. It streamlines collaboration by updating floor plans, elevations, and sections automatically as you build.",
    learns: [
      "Project workflow",
      "Levels & Grids",
      "Walls Modeling",
      "Object Modifying",
      "Doors & Windows",
      "Floors & Roofs",
      "Curtain wall, Stairs & Ramps",
      "Dimensions & Constraints",
      "Annotations & Documentation",
      "Schedules",
    ]
  },

  {
    slug: "STAAD .Pro Essential", categorySlug: "civil-courses", name: "STAAD .Pro Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "A core engineering software used to test, analyze, and verify the load-bearing capacity and safety of buildings and steel structures. Essential for structural engineers to perform finite element analysis and ensure concrete/steel building safety codes.",
    learns: [
      "STAAD Editor",
      "Modeling of Structures,",
      "Objects and Model Editing",
      "Model Specification",
      "Loads & load combination",
      "Structural Analysis",
      "Wind load analysis",
      "Water tank Design",
      "RC Structure Design",
      "Steel Structure design",
    ]
  },

  {
    slug: "Construction Management using MSP", categorySlug: "civil-courses", name: "Construction Management using MSP", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Focuses on using Microsoft Project to handle high-level project scheduling, timeline tracking, and resource management. Helps site engineers control critical paths, allocate workforce efficiently, and track project delay margins.",
    learns: [
      "STAAD Editor",
      "Modeling of Structures,",
      "Objects and Model Editing",
      "Model Specification",
      "Loads & load combination",
      "Structural Analysis",
      "Wind load analysis",
      "Water tank Design",
      "RC Structure Design",
      "Steel Structure design",
    ]
  },

  {
    slug: "Max for Engineers/Architects Essential", categorySlug: "civil-courses", name: "Max for Engineers/Architects Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "A specialized visualization software used to build heavy high-end 3D walkthrough animations and components. Ideal for creating cinematic walkthroughs and high-fidelity promotional media for premium real estate developments.",
    learns: [
      "Standard Shapes",
      "Compound Objects",
      "AEC Extended Modeling",
      "Modifiers",
      "Interior & Exterior Objects",
      "Materials",
      "Lights & Cameras",
      "Rendering",
      "Animation",
      "File Management",
    ]
  },

  {
    slug: "ETABS Essential", categorySlug: "civil-courses", name: "ETABS Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Used for the advanced structural analysis, design calculation, and safety auditing of multi-story buildings. Widely recognized as the industry-standard software for seismic analysis and wind-load calculations on high-rise structures.",
    learns: [
      "Modeling of Building Structure",
      "Object Editing Tools",
      "Property Specification",
      "Loads & load combination",
      "Analysis of Building System",
      "Concrete Frame Design",
      "Shear Wall Design",
      "Steel Frame Design",
      "Steel Connection & Joist Design",
      "Detailing & Documentation",
    ]
  },

  {
    slug: "MSP with PPM Concepts Essential", categorySlug: "civil-courses", name: "MSP with PPM Concepts Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Combines Microsoft Project with Project Portfolio Management concepts to track and manage multiple large projects at the same time. Enables executive managers to prioritize project budgets and share resources across multiple corporate infrastructure contracts.",
    learns: [
      "Project management framework",
      "Project Initiation & Planning",
      "Project Execution",
      "Monitoring and Controlling Process",
      "MSP road Map",
      "Task and its relationship",
      "Work Breakdown Structure",
      "Resource Analysis & leveling",
      "Earned Value Analysis",
      "Multiple Projects & Reports",
    ]
  },

  {
    slug: "Building Estimation and Costing with Simulation", categorySlug: "civil-courses", name: "Building Estimation and Costing with Simulation", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Uses computational simulations to accurately estimate material quantities and calculate the total budget of a construction project. Provides precision metrics to reduce material wastage and draft highly competitive contract tender proposals.",
    learns: [
      "Reviewing the model",
      "Exploring your model",
      "Simulation - Time-liner",
      "Animate Objects",
      "Rendering",
      "Estimation",
      "Manual Takeoff Tools",
      "Automatic Takeoff Tools",
      "Validation & Reports",
    ]
  },

  {
    slug: "ProSteel Essential", categorySlug: "civil-courses", name: "ProSteel Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "An engineering software used for designing heavy structural steel layouts, connection detailing, and 3D steel structures. Perfect for detailing complex steel structures like industrial warehouses, communication towers, and heavy manufacturing plants.",
    learns: [
      "Shapes",
      "Plates & Element Modification",
      "Base plate Modeling",
      "Drill & Bolting",
      "Static & Dynamic Bracing",
      "Purlins & Connections",
      "Structural Elements",
      "Custom Shape Creation",
      "Detailing",
    ]
  },

  {
    slug: "Ansys Civil Essential", categorySlug: "civil-courses", name: "Ansys Civil Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "A mathematical simulation software used to precisely predict stress, strain, and structural load limits in complex concrete setups. Allows engineers to simulate heavy structural failures and concrete stress distribution under extreme pressure variations.",
    learns: [
      "Modeling in ANSYS",
      "Loads & Load Combination",
      "Concrete Design",
      "Slab Design",
      "Pre-stress Concrete Design",
      "Bridge Design",
      "Retaining Wall Design",
      "Foundation Design",
      "Seismic Design",
      "Steel Design",
    ]
  },

  {
    slug: "AECOsim Essential", categorySlug: "civil-courses", name: "AECOsim Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "A BIM-centric platform that allows structural, architectural, and mechanical engineering teams to design and execute works on a single digital space. Reduces multi-disciplinary drafting conflicts by tracking shared structural data points in real-time.",
    learns: [
      "Placing 2D Elements",
      "Manipulating 2D Elements",
      "Modeling Elements",
      "Placing Contents",
      "Placing Lighting Fixture",
      "Stairs & Rails Creation",
      "Placing Elevators",
      "Roof Creation",
      "Architecture Master Model",
    ]
  },

  {
    slug: "AutoCAD Civil 3D Essential", categorySlug: "civil-courses", name: "AutoCAD Civil 3D Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "An industry-standard software for land development, surveying, road design, and infrastructure engineering analysis. Empowers civil engineers to design precision corridor models, grading patterns, and gravity pipe network alignments.",
    learns: [
      "Survey Fundamental",
      "Working with Point Data",
      "Survey & LiDAR Survey",
      "Surface Analysis & Grading",
      "Alignment Creation",
      "Corridor Creation",
      "Junction Design",
      "Earthwork calculation",
      "Quantity Takeoff",
    ]
  },

  {
    slug: "MicroStation Essential", categorySlug: "civil-courses", name: "MicroStation Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "A precision vector graphics tool used to create massive-scale civil engineering layout drawings and infrastructure models. Trusted worldwide for handling large, complex infrastructure datasets for global-scale utility maps and train track networks.",
    learns: [
      "MicroStation manager",
      "Creating Elements",
      "Manipulate Tools",
      "Modify Element",
      "Group & Region",
      "Cells & Levels",
      "Hatch & Pattern",
      "Isometric Drawing",
      "Annotation & Dimensioning",
      "Drafting Outputs",
    ]
  },

  {
    slug: "MX Road Essential", categorySlug: "civil-courses", name: "MX Road Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "A specialized string-based modeling system used for the highly precise design of highway alignments and expressway layouts. Crucial for geometric design calculations, earthwork volumetric estimation, and national highway vertical profiles.",
    learns: [
      "Survey inputs and validation",
      "Model Analysis",
      "Surface Analysis",
      "Earthwork calculation",
      "Alignment creation",
      "Junction design",
      "Earthwork design",
      "Pavement design",
      "Final Drawing Manager",
    ]
  },

  {
    slug: "RCC Detailing Essential", categorySlug: "civil-courses", name: "RCC Detailing Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "A custom tool used to generate reinforcement concrete drawings and visually arrange internal steel bars according to engineering codes. Ensures that structural shop drawings explicitly reflect accurate rebar spacing, laps, and stirrup positions.",
    learns: [
      "Element Creation",
      "Beam & Column Detailing",
      "Floor Slab Detailing",
      "Foundation Detailing",
      "Staircase detailing",
      "Retaining Wall Detailing",
      "Drawing Preparation",
      "Bar Bending Schedule",
    ]
  },

  {
    slug: "Proficient in AutoCAD for Civil Engineers and Architects", categorySlug: "civil-courses", name: "Proficient in AutoCAD for Civil Engineers and Architects", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Covers everything from drafting basics to advanced 2D layouts and building floor plans. The foundational layout course that trains you to generate cross-sections, structural details, and submission drawings.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Dimensioning and its standards",
          "Architectural plan drafting",
          "Elevation drafting",
          "Section drafting",
          "Special drawings",
          "Structural drawings requirements",
          "RC Structural Drawings",
          "Steel Structural Drawing",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Drafting Entities",
          "Layer management",
          "Views & Annotation",
          "Parametric drawings",
          "Blocks & Attributes",
          "X-ref and OLE",
          "Layout and Plot",
          "AutoCAD Architecture features",
          "AutoCAD 3D Technics",
          "Advanced drafting and modifications",
        ]
      }
    ]
  },

  {
    slug: "Proficient in Revit", categorySlug: "civil-courses", name: "Proficient in Revit", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "An advanced course in Building Information Modeling (BIM) to handle complex 3D architectural models and industrial blueprints. Teaches deep parameter configurations, custom family creations, and cross-platform template integrations.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Levels and Grids",
          "Walls & Complex Walls",
          "Joineries & Furniture",
          "Create Floors & Roofs",
          "Curtain Walls & Stairs",
          "Conceptual Energy Analysis",
          "Documentation & Schedules",
          "Visualization",
          "Site Design & Family Creation",
          "Link Projects & Collaboration",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Structural Column",
          "Structural Beam",
          "Structural Walls & Floors",
          "Steel Structures",
          "Structural Foundation",
          "Structural Slabs & Openings",
          "Structural Analysis",
          "Construction Documents",
          "Schedule",
        ]
      }
    ]
  },

  {
    slug: "Proficient in STAAD.Pro", categorySlug: "civil-courses", name: "Proficient in STAAD.Pro", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Advanced training in structural analysis, foundation limits, and load testing for multi-story structures. Focuses on complex dynamic analysis, heavy structural foundation designs, and multi-variable frame checking algorithms.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Modeling of Structures",
          "Assigning Properties",
          "Loads & Load combinations",
          "Bridge Deck Design",
          "Static Linear Analysis",
          "Response Spectrum & Time",
          "History Analysis",
          "P-Delta & Buckling Analysis",
          "RC Beam, Column Design",
          "Design of Steel Structures",
          "Foundation Design",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Detail and Detailing Requirements",
          "Slab Design",
          "Beam Design",
          "Column Design",
          "Design of Footing",
          "Design of Staircase",
        ]
      }
    ]
  },

  {
    slug: "Proficient in Primavera for Construction Management", categorySlug: "civil-courses", name: "Proficient in Primavera for Construction Management", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "An industry-standard enterprise tool used for master scheduling, budgeting, and risk analysis in massive projects. The definitive standard software credential required for planning major international commercial developments.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Project Management Framework",
          "Organization Structure",
          "Project Initiation",
          "Project Planning",
          "Project Execution",
          "Monitoring & Controlling",
          "Closing Process Group",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Work Breakdown Structure",
          "Courseware Issued",
          "Primavera Reference Guide",
          "Oracle WDP e-Kit",
          "Activities & Relationships",
          "Scheduling",
          "Constraints & Codes",
          "Roles & Resources",
          "Resource Analysis & Levelling",
          "Updating Project Progress",
          "Tracking Project Progress",
          "Issues & Thresholds",
          "UDF & Reports",
        ]
      }
    ]
  },

  {
    slug: "Proficient in Interior & Architectural Design", categorySlug: "civil-courses", name: "Proficient in Interior & Architectural Design", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Focuses on interior space planning, architectural layouts, and creating hyper-realistic interior floor plans. Combines space optimization principles with lighting aesthetics to design premium commercial interiors.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Shapes & Geometries",
          "Particle Systems & Space Warps",
          "Modifiers",
          "Interior Modeling",
          "Exterior Modeling",
          "Mechanical Product Modeling",
          "Working with Materials",
          "Lights & Camera",
          "Advanced Rendering",
          "Animation & Walkthrough",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "V-ray Rendering Engines",
          "V-ray Image Sampling Techniques",
          "V-ray Lights",
          "Global Illumination for Exterior Scenes",
          "Global Illumination for Interior Scenes",
          "V-ray Physical Camera",
          "V-Ray Materials",
          "V-ray Aerial Perspective",
          "V-Ray Objects",
          "V-ray Render Elements",
        ]
      }
    ]
  },

  {
    slug: "Proficient in Construction Management using Primavera & MSP", categorySlug: "civil-courses", name: "Proficient in Construction Management using Primavera & MSP", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Combines both top tools to perfectly manage complex resource scheduling and project timelines. Gives you a massive career advantage by enabling you to manage both local tasks and large enterprise schedules.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Project management framework",
          "Project Initiation & Planning",
          "Project Execution",
          "Monitoring & Controlling Process",
          "MSP road Map",
          "Duration 104 Hours",
          "CADD",
          "Task and its relationship",
          "Work Breakdown Structure",
          "Resource Analysis & leveling",
          "Earned Value Analysis",
          "Multiple Projects & Reports",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Work Breakdown Structure",
          "Activities & Relationships",
          "Scheduling ",
          "Constraints & Codes",
          "Roles & Resources",
          "Resource Analysis & Levelling",
          "Updating Project Progress",
          "Tracking Project Progress",
          "Issues & Thresholds",
          "UDF & Reports",
        ]
      }
    ]
  },

  {
    slug: "Proficient in 3D BIM", categorySlug: "civil-courses", name: "Proficient in 3D BIM", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Focuses on integrating architectural components and spatial coordinate designs into a unified 3D digital building model. Trains you to run comprehensive clash-detection tests to spot physical structural interference early.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Drafting - Best Practices",
          "File Management",
          "Drawing entities",
          "Editing Entities",
          "Object Properties",
          "Annotation",
          "Views & Dimensioning",
          "Symbols & BOM",
          "Plotting",
          "Printing Drawing",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Levels and Grids",
          "Walls & Complex Walls",
          "Joineries & Furniture",
          "Create Floors & Roofs",
          "Curtain Walls & Stairs",
          "Conceptual Energy Analysis",
          "Documentation & Schedules",
          "Visualization",
          "Site Design & Family Creation",
          "Link Projects & Collaboration",
        ]
      }
    ]
  },

  {
    slug: "Proficient in BIM for Transportation Design", categorySlug: "civil-courses", name: "Proficient in BIM for Transportation Design", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "A digital framework used to plan and design structural layouts for highways, railways, bridges, and major transit infrastructure. Streamlines massive transit corridors drafting workflows by linking alignment profiles directly to construction estimates.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "MicroStation manager",
          "Creating Elements",
          "Manipulate Tools",
          "Modify Element",
          "Group & Region",
          "Cells & Levels",
          "Hatch & Pattern",
          "Isometric Drawing",
          "Annotation & Dimensioning",
          "Drafting reports",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Survey inputs and validation",
          "Model & Surface analysis",
          "Earthwork calculation",
          "Alignment creation",
          "Carriageway & Junction design",
          "Shoulder & Earthwork design",
          "Pavement design",
          "Road re-design & rehabilitation",
          "Testing a Design",
          "Dynamic reports",
        ]
      }
    ]
  },

  {
    slug: "Proficient in BIM for Structural Design", categorySlug: "civil-courses", name: "Proficient in BIM for Structural Design", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Dedicated to modeling load-bearing concrete/steel skeletons and column layouts inside a digital BIM workspace. Bridges structural design math with physical architectural space modeling for error-free framing fabrication blueprints.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "MicroStation manager",
          "Creating Elements",
          "Manipulate Tools",
          "Modify Element",
          "Group & Region",
          "Cells & Levels",
          "Hatch & Pattern",
          "Isometric Drawing",
          "Annotation & Dimensioning",
          "Drafting outputs",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Modeling of Structures",
          "Assigning Properties",
          "Loads & Load combinations",
          "Bridge Deck Design",
          "Static Linear Analysis",
          "Response Spectrum & Time History Analysis",
          "P-Delta & Buckling Analysis",
          "RC Beam, Column Design",
          "Design of Steel Structures",
          "Foundation Design",
        ]
      }
    ]
  },

  {
    slug: "Proficient in 5D BIM", categorySlug: "civil-courses", name: "Proficient in 5D BIM", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "An advanced engineering simulation that integrates the 3D model and time scheduling (4D) with real-time cost estimation and material budgeting (5D). Provides modern construction estimators with instantaneous cost recalculations as design dimensions change.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Foundation Design",
          "Walls & Complex Walls",
          "Joineries & Furniture",
          "Create Floors & Roofs",
          "Curtain Walls & Stairs",
          "Conceptual Energy Analysis",
          "Documentation & Schedules",
          "Visualization",
          "Site Design & Family Creation",
          "Link Projects & Collaboration",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Reviewing the model",
          "Exploring your model",
          "Simulation - Time-liner",
          "Animate Objects",
          "Rendering",
          "Estimation",
          "Manual Takeoff Tools",
          "Automatic Takeoff Tools",
          "Validation & Reports",
        ]
      }
    ]
  },



  // Mechanical & Aerospace //

  {
    slug: "GD&T-Essential", categorySlug: "mechanical-courses", name: "GD&T Essential", desc: "2D & 3D drafting for design professionals.", duration: "2 Months", cat: "CAD", image: imgAutocad,
    details: "Teaches you how to specify exact dimensions and tolerances on engineering drawings to significantly reduce factory production errors. Ensures precision communication between design desks and manufacturing units based on global ASME/ISO standards.",
    learns: [
      "GD & T Rules",
      "ASME Y14.5M-1994",
      "Size Tolerance",
      "Form Tolerance",
      "Orientation Tolerance",
      "Profile Tolerance",
      "Location Tolerance",
      "Runout",
      "Datum",
      "Modifiers",
    ]
  },

  {
    slug: "Creo Essential", categorySlug: "mechanical-courses", name: "Creo Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "A parametric 3D modeling and assembly software heavily used in the automotive and aerospace industries for advanced product design. Teaches robust top-down product assembly logic and high-performance mechanical part configuration rules.",
    learns: [
      "Getting started Creo UI",
      "Sketches for features",
      "Part Modeling features",
      "Feature redefining",
      "Datum Features",
      "Family Table & Parameters",
      "Advanced Assembly",
      "Surface Modeling",
      "Surface Modeling",
      "Sheet metal design",
    ]
  },

  {
    slug: "NX CAD Essential", categorySlug: "mechanical-courses", name: "NX CAD Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Used in high-end product engineering for advanced surface modeling, component layouts, and detailed engineering drawings. Provides supreme industry-level mastery over complex freeform modeling used in styling modern vehicle bodies.",
    learns: [
      "NX GUI Explore",
      "Sketches & Constraints",
      "Part Features",
      "Instance geometries",
      "Datum Creation",
      "Feature Redesigning",
      "Assembly design",
      "Surface Modeling",
      "Drawing & Detailing",
      "Sheet metal Design",
    ]
  },

  {
    slug: "SolidWorks Essential", categorySlug: "mechanical-courses", name: "SolidWorks Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Helps you design machine parts, structural frames, and 3D components while generating their 2D manufacturing blueprints. The most widely used mechanical design utility software for rapid product prototyping and part assembly logic.",
    learns: [
      "Getting Started with SolidWorks",
      "Sketch Entities",
      "Part Modeling Tools",
      "Editing & Features",
      "Engineering Features",
      "Assembly design",
      "Drafting& BOM",
      "Sheet metal design",
    ]
  },

  {
    slug: "CATIA Essential", categorySlug: "mechanical-courses", name: "CATIA Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "An advanced software used to model complex aircraft surfaces, high-level automotive parts, and massive multi-component assemblies. The definitive tier-1 engineering standard software utilized by global aerospace corporations for full aircraft definition.",
    learns: [
      "Getting Started with SolidWorks",
      "Sketch Entities",
      "Part Modeling Tools",
      "Editing & Features",
      "Engineering Features",
      "Assembly design",
      "Drafting& BOM",
      "Sheet metal design",
    ]
  },

  {
    slug: "Ansys Workbench Essential", categorySlug: "mechanical-courses", name: "Ansys Workbench Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Simulates and tests how mechanical components behave under real-world structural stress, thermal heat loads, and vibrations. Reduces the need for physical prototypes by testing material breaking points inside a virtual multi-physics space.",
    learns: [
      "FEA Concepts",
      "Design models",
      "Ansys Solver GUI",
      "FEA Meshing",
      "Materials & Boundary Conditions",
      "1D, 2D & 3D Analysis",
      "Static Structural Analysis",
      "Fatigue Study",
      "Modal Analysis",
      "Plot and Postprocess",
    ]
  },

  {
    slug: "Mastercam Essential", categorySlug: "mechanical-courses", name: "Mastercam Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Used to design precise toolpaths and generate automatic machine instructions (G-code) for CNC manufacturing. Bridges digital design with factory automation by programming error-free milling, turning, and cutting coordinates.",
    learns: [
      "Mill - 2D Hole Marking",
      "Mill 2D - Basic Operation",
      "Mill 2D - Advanced operation",
      "Mill 2D - Creating Dynamic Mill",
      "Mill 3D - Roughing",
      "Mill 3D - Finishing",
      "Hybrid Finishing",
      "Rastor Finishing",
      "Courseware Issued Mastercam Essential Reference",
    ]
  },

  {
    slug: "Ansys Fluent Essential", categorySlug: "mechanical-courses", name: "Ansys Fluent Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "A Computational Fluid Dynamics (CFD) software used to accurately simulate airflow, fluid motion, and gas-thermal interactions. Critical for predicting automotive aerodynamics coefficients, combustion efficiencies, and cooling system capacities.",
    learns: [
      "CFD solving workflow",
      "Flow Mix and Heat Transfer",
      "Transonic Flow",
      "Multiple Species Flow",
      "Turbulence Model",
      "Periodic Heat Flow",
      "Radiation and convection",
      "Turbulent Flow in Heat Exchanger",
      "Siphoning",
    ]
  },

  {
    slug: "Autodesk Inventor Essential", categorySlug: "mechanical-courses", name: "Autodesk Inventor Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Focuses on digital product prototyping, sheet metal layouts, and mechanical design simulation workflows. Enables mechanical drafters to create precise unfolding patterns for sheet metal fabrications and mold designs.",
    learns: [
      "Inventor Work Environment",
      "Creating 2D Entities",
      "Advanced Sketching",
      "Modifying Sketch",
      "Part Modeling",
      "Part Features",
      "Solid Editing",
      "Assemblies Design",
      "Sheet Metal Design",
      "Detailing",
    ]
  },

  {
    slug: "CATIA Kinematics Essential", categorySlug: "mechanical-courses", name: "CATIA Kinematics Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Virtually simulates the motion, velocity, speed, and joint constraints of moving mechanical mechanisms. Allows designers to clear mechanical interferences and optimize linkage trajectories before component manufacturing.",
    learns: [
      "Multiple Joints",
      "Generating Mechanisms",
      "Simulating Mechanism",
      "Sensors",
      "Trace",
      "Swept Volume",
      "Interpreting Analysis Results",
      "Interference Analysis",
      "Exporting Interference Results Analysis",
    ]
  },

  {
    slug: "Creo Simulate Essential", categorySlug: "mechanical-courses", name: "Creo Simulate Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Allows engineers to detect stress points and calculate structural load limits early during the product design phase. Ensures parts are optimally lightweight yet rigid enough to survive high structural field stress inputs.",
    learns: [
      "Preparing FEA Model",
      "Pre-Process",
      "Meshing Techniques",
      "Structural Static Analysis",
      "Modal Analysis",
      "Fatigue Analysis",
      "Buckling Analysis",
      "Thermal Analysis",
      "Assembly Analysis",
      "Pre-stress analysis",
    ]
  },

  {
    slug: "HyperMesh Essential", categorySlug: "mechanical-courses", name: "HyperMesh Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "A powerful FEA pre-processing tool used to break complex structures into mesh elements for crash and safety testing simulations. Provides engineers with unparalleled mesh topology control required for high-accuracy automotive crashworthiness studies.",
    learns: [
      "FEA Meshing",
      "1D, 2D & 3D Mesh",
      "Q1 Mesh",
      "Shrink wrap mesh",
      "Tetra Mesh",
      "Hexa mesh",
      "Assembly FEM",
      "Solver Interfacing",
      "Post-Process",
      "Reports",
    ]
  },

  {
    slug: "NX Nastran Essential", categorySlug: "mechanical-courses", name: "NX Nastran Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "A premium mathematical solver used to analyze linear/non-linear structural stress, noise levels, vibrations, and thermal dynamics. The leading structural calculation engine trusted for verifying critical safety components in high-stress aerospace vehicles.",
    learns: [
      "FEA Concepts",
      "Model Cleanup",
      "Geometry Idealization",
      "Material for FEA",
      "Meshing in Nastran",
      "Elememt and Mesh Attributes",
      "Linear Static Analysis",
      "Modal Analysis",
      "Buckling Analysis",
    ]
  },

  {
    slug: "NX CAM Essential", categorySlug: "mechanical-courses", name: "NX CAM Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Gives you precise control over multi-axis CNC milling, turning machines, and automated factory tooling schedules. Maximizes automated factory outputs by optimizing material removal paths on advanced 5-axis heavy machining complexes.",
    learns: [
      "CAM Configuration",
      "Face Milling Operation",
      "Planar Milling Operation",
      "Contour Milling Operation",
      "Thread Milling Operation",
      "Z-level Milling Operation",
      "Variable Contour Operation",
      "Multi blade milling operation",
      "Drilling Operation",
      "Turning Operation",
    ]
  },

  {
    slug: "Reverse Engineering using CATIA Essential", categorySlug: "mechanical-courses", name: "Reverse Engineering using CATIA Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Teaches you how to take scanned 3D mesh data from physical parts and reconstruct them into clean digital 3D models. Crucial for updating legacy part drawings, modifying physical casting dies, and matching handmade prototypes.",
    learns: [
      "Digitized Shape Editor",
      "Working with Point Cloud",
      "Scans & Curves",
      "Curve Creation",
      "Quick Surface reconstruction",
      "Generic Surface Design",
      "Scan to 3D",
    ]
  },

  {
    slug: "SolidWorks Motion Essential", categorySlug: "mechanical-courses", name: "SolidWorks Motion Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "A specialized module used to simulate and measure the physical forces, gears, and dynamic movements of working mechanisms. Calculates the exact power spikes, torque limits, and motor sizes needed to drive mechanical linkage structures safely.",
    learns: [
      "Basic Motion",
      "Kinematic simulation",
      "Animation",
      "Multibody dynamics",
      "Mechanism Verification",
      "Case Study",
    ]
  },

  {
    slug: "Non-Destructive Testing Essential", categorySlug: "mechanical-courses", name: "Non-Destructive Testing Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "A critical engineering method used to inspect internal cracks and defects in materials or welded joints without damaging them. Provides essential hands-on knowledge of ultrasonic, radiographic, and dye penetrant inspection criteria used in industrial safety.",
    learns: [
      "NDT Types",
      "Radiographic Testing",
      "Magnetic Particle Testing",
      "Ultrasonic Testing",
      "Liquid Penetrant Testing",
      "Visual Testing",
      "Welding Inspection",
    ]
  },

  {
    slug: "Proficient in AutoCAD for Mechanical Engineers", categorySlug: "mechanical-courses", name: "Proficient in AutoCAD for Mechanical Engineers", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Covers basic mechanical symbols, layout drafting, and advanced 2D manufacturing sheet design. Builds the primary industrial baseline for drafting component limits, geometric views, and orthographic design standards.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Multiviews and Standards",
          "Dimensioning and its standards",
          "Fasteners and its standards",
          "Spring Terminology",
          "Drafting for machined features",
          "Sheet metal drafting",
          "Weld symbols",
          "Linkage Symbols",
          "Pipe symbols and details",
          "HVAC symbol Specifications",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Drafting Entities",
          "Advanced drafting and modifications",
          "Layer management",
          "Views & Annotation",
          "Parametric drawings",
          "Blocks & Attributes",
          "X-ref and OLE",
          "Layout and Plot",
          "AutoCAD mechanical features",
          "AutoCAD 3D Technics",
        ]
      }
    ]
  },

  {
    slug: "Proficient in Creo", categorySlug: "mechanical-courses", name: "Proficient in Creo", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Advanced training in building industry-level machinery design, complex assembly mechanisms, and parametric 3D products. Prepares you for top-tier automation roles by teaching fully parameterized configuration tables and complex assemblies handling.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Sketch tools",
          "Part Modeling Features",
          "Part Editing Features",
          "Datum Features",
          "Assembly Modeling",
          "Advanced Assembly",
          "Surface Modeling",
          "Sheet metal design",
          "Drawing Views",
          "Dimensions & Annotation",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Preparing FEA Model",
          "Pre-process",
          "Meshing Techniques",
          "Structural Static Analysis",
          "Modal Analysis",
          "Fatigue Analysis",
          "Buckling Analysis",
          "Thermal Analysis",
          "Assembly Analysis",
          "Pre-stress analysis",
        ]
      }
    ]
  },

  {
    slug: "Proficient in SolidWork", categorySlug: "mechanical-courses", name: "Proficient in SolidWork", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Focuses on managing complex machine elements, automated components, and creating factory-ready production blueprints. Master structural welding framing models, advanced sheet metal workflows, and configuration tables for product variants.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Sketch Creation Tools",
          "Sketch Editing Tools",
          "Part modeling features",
          "Part Editing Features",
          "Assembly Modeling",
          "Surface Modeling",
          "Sheet metal design",
          "Weldment Design",
          "Drawing Views & Annotations",
          "Model Visualization",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Basic Motion",
          "Kinematic simulation",
          "Animation",
          "Multibody dynamics",
          "Mechanism Verification",
          "Case Study",
        ]
      }
    ]
  },

  {
    slug: "Proficient in NX", categorySlug: "mechanical-courses", name: "Proficient in NX", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Advanced tool workflows for high-end product lifecycle engineering, systematic structural modeling, and heavy surface detailing. Unlocks enterprise-level model sharing, advanced sheet metal design matrices, and deeply nested assembly structures.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Sketch Creation & Editing Tools",
          "Part Modeling Features",
          "Part Editing Features",
          "Assembly Modeling",
          "Advanced Assembly",
          "Surface Modeling",
          "Sheet metal design",
          "Drawing Views",
          "Dimensions & Annotations",
          "Rendering",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "CAM Configuration",
          "Face Milling Operation",
          "Planar Milling Operation",
          "Contour Milling Operation",
          "Thread Milling Operation",
          "Z-level Milling Operation",
          "Variable Contour Operation",
          "Multi blade milling operation",
          "Drilling Operation",
          "Turning Operation",
        ]
      }
    ]
  },

  {
    slug: "Proficient in CATIA", categorySlug: "mechanical-courses", name: "Proficient in CATIA", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Advanced modeling tailored for large-scale aircraft fuselages, car body surfaces, and industry-standard moving assemblies. The premium standard specialization for landing elite structural engineering positions inside international transport and defense supply chains.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Sketch Creation Tools",
          "Sheet Metal Design",
          "Sketch Editing Tools",
          "Surface Modeling",
          "Part Modeling Features",
          "Drawing Views",
          "Advanced part Modeling Features",
          "Dimensions & Annotations",
          "Assembly Modeling",
          "Drafting Settings & Rendering",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Multiple Joints",
          "Generating Mechanisms",
          "Simulating Mechanism",
          "Sensors",
          "Trace",
          "Swept Volume",
          "Interpreting Analysis Results",
          "Interference Analysis",
          "Exporting Interference Results Analysis",
        ]
      }
    ]
  },

  {
    slug: "Proficient in CAE", categorySlug: "mechanical-courses", name: "Proficient in CAE", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Computer-Aided Engineering training to simulate real-world physics environments and analyze product durability and stress behaviors. Empowers structural optimization specialists to reduce structural weight while confidently improving safety safety margins.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Geometry Preparation",
          "Advanced Idealization",
          "Materials & Boundary Conditions",
          "Meshing",
          "Static Structural Analysis",
          "Contact analysis",
          "Assembly FEM",
          "Response Simulation",
          "Modal & Buckling analysis",
          "Thermal & Optimization",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "FEA Meshing",
          "1D, 2D & 3D Mesh",
          "Q1 Mesh",
          "Shrink wrap mesh",
          "Tetra Mesh",
          "Hexa mesh",
          "Assembly FEM",
          "Solver Interfacing",
          "Post-process",
          "Reports",
        ]
      }
    ]
  },

  {
    slug: "Proficient in Ansys", categorySlug: "mechanical-courses", name: "Proficient in Ansys", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Hyper-accurate numerical calculations for advanced multi-physics fluids interaction, thermal load, and overall structural strength. The definitive advanced credential confirming your ability to solve complex combined thermal-structural fatigue puzzles.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Creating 3D Models",
          "Creating FEA Models",
          "Simple Static Structural Analysis",
          "FEA meshing Technique",
          "Modal & Buckling Analysis",
          "Loads & Boundary Condition",
          "Fatigue & Thermal Analysis",
          "Materials",
          "Design Parameters"
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Creating 3D Models",
          "Creating FEA Models",
          "Simple Static Structural Analysis",
          "FEA meshing Technique",
          "Modal & Buckling Analysis",
          "Loads & Boundary Condition",
          "Fatigue & Thermal Analysis",
          "Materials",
          "Design Parameters",

        ]
      }
    ]
  },




  // MEP, Piping & Plant //

  {
    slug: "PDMS Essential", categorySlug: "mep-courses", name: "PDMS Essential", desc: "Schematic, panel & wiring design.", duration: "2 Months", cat: "Elec", image: imgElec,
    details: "Used to design complex 3D piping layouts, equipment modeling, and structural frames for oil refineries and chemical plants. Teaches you how to build intelligent, database-driven process plant models without structural space conflicts.",
    learns: [
      " File Management",
      "Creating & Modifying Equipment",
      "Positioning Equipment",
      "Creating & Modifying the pipe",
      "Positioning & Orienting the pipes",
      "Utilities",
      "Draft manager",
      "Iso-Generation",
      "Report Generation",
    ]
  },

  {
    slug: "HVAC Design Essential", categorySlug: "mep-courses", name: "HVAC Design Essential", desc: "BIM modeling for architects.", duration: "3 Months", cat: "BIM", image: imgRevit,
    details: "Focuses on designing building ventilation systems, air conditioning networks, duct layouts, and heat load calculations. Prepares engineers to size duct runs, balance airflow paths, and match chillers with building heat profiles.",
    learns: [
      "Fundamentals of HVAC",
      "Refrigeration Cycle",
      "HVAC load calculation",
      "O general load calculation",
      "Duct Designing",
      "Kitchen hood ventilation",
      "Car parking ventilation",
      "Chillers/DX system",
      "District cooling",
      "Drafting using AutoCAD",
    ]
  },

  {
    slug: "REVIT MEP Essential", categorySlug: "mep-courses", name: "REVIT MEP Essential", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Integrates mechanical, electrical, and plumbing networks directly into a master architectural model using the BIM platform. Maintains cross-discipline data synchronization to prevent electrical conduits from conflicting with heavy structural beams.",
    learns: [
      "Worksharing",
      "Family Creation",
      "HVAC Load Analysis",
      "Setting Up Air Systems",
      "Duct Work",
      "Mechanical Piping System",
      "Lighting Analysis",
      "Power Distribution System",
      "Plumbing - Fixtures & Fittings",
      "Drafting and Detailing",
    ]
  },

  {
    slug: "Proficient in MEP Design", categorySlug: "mep-courses", name: "Proficient in MEP Design", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Advanced course covering complete electrical wiring plans, water drainage plumbing, and HVAC systems for commercial buildings. Provides the total holistic engineering view required to manage high-density utility corridors in high-rise structures.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Drafting - Best Practices",
          "File Management",
          "Drawing entities",
          "Editing Entities",
          "Object Properties",
          "Annotation",
          "Views & Dimensioning",
          "Symbols & BOM",
          "Plotting",
          "Printing Drawing",

        ]
      },
      {
        title: "Module 2",
        learns: [
          "Work sharing",
          "Family Creation",
          "Symbols & Annotations",
          "Mechanical Design",
          "Mechanical System & Duct Work",
          "Mechanical Piping System",
          "Electrical Design",
          "Fire Alarm Model",
          "Plumbing Design",
          "Drafting & Detailing",
        ]
      }
    ]
  },

  {
    slug: "Proficient in HVAC and MEP Design", categorySlug: "mep-courses", name: "Proficient in HVAC and MEP Design", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Combines building workflows, ventilation ducts, power layouts, and drainage tracking for high-level service engineering. Trains consultants to lead full building services optimization drives from initial concept sketches up to construction signs off.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Work sharing",
          "Family Creation",
          "Symbols & Annotations",
          "Mechanical Design",
          "Mechanical System & Duct Work",
          "Mechanical Piping System",
          "Electrical Design",
          "Fire Alarm Model",
          "Plumbing Design",
          "Drafting & Detailing",

        ]
      },
      {
        title: "Module 2",
        learns: [
          "Fundamentals of HVAC",
          "Refrigeration Cycle",
          "HVAC load calculation",
          "O general load calculation",
          "Duct Designing",
          "Kitchen hood ventilation",
          "Car parking ventilation",
          "Chillers/DX system",
          "District cooling",
          "Drafting using AutoCAD",
        ]
      }
    ]

  },

  {
    slug: "Proficient in Piping Design", categorySlug: "mep-courses", name: "Proficient in Piping Design", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Focuses on advanced pipe routing, stress analysis, valve arrangements, and isometric blueprints for industrial fluid transport. Develops specialized knowledge regarding thermal expansion loops, pipe support criteria, and pressure code drop mathematics.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Drafting - Best Practices",
          "File Management",
          "Drawing entities",
          "Editing Entities",
          "Object Properties",
          "Annotation",
          "Views & Dimensioning",
          "Symbols & BOM",
          "Plotting",
          "Printing Drawing",


        ]
      },
      {
        title: "Module 2",
        learns: [
          "Creating & Modifying Equipment",
          "Creating Pipe",
          "Modifying Pipe",
          "Orienting Pipes",
          "Structures",
          "ASL Modeler & HVAC",
          "Cable System",
          "Draft manager",
          "Iso-Generation",
        ]
      }
    ]

  },

  {
    slug: "SmartPlant 3D (SP3D)", categorySlug: "mep-courses", name: "SP3D", desc: "SP3D", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "An industry-standard data-centric software used for 3D plant design, complex pipe routing, and structural layouts in massive oil and gas projects. Unlocks high-demand technical careers within international engineering procurement and construction megaprojects.",
    learns: [
      "SmartPlant 3D Interface & Navigation",
      "Equipment & Piping Modeling",
      "Structural Steel Modeling",
      "Pipe Routing & Component Placement",
      "Isometric Drawing Generation",
      "Clash Detection & Project Documentation",
    ]
  },

  {
    slug: "E3D", categorySlug: "mep-courses", name: "E3D", desc: "E3D", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Utilizes Aveva Everything3D for next-generation plant engineering, offering ultra-fast 3D modeling, advanced visualization, and clash detection. Integrates cloud asset databases with structural designs to build interactive 3D digital plant models instantly.",
    learns: [
      "E3D Interface & Project Setup",
      "Equipment & Piping Design",
      "Structural & Cable Tray Modeling",
      "3D Plant Layout & Routing",
      "Clash Detection & Design Review",
      "Drawing Extraction & Reports",
    ]
  },


  // Enterprise Resource Planning //

  {
    slug: "SAP Finance and Controlling (FICO)", categorySlug: "enterprise-courses", name: "SAP Finance and Controlling (FICO)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "An enterprise ERP module used to track a company's complete financial accounting (FI) and internal cost management (CO). The backbone system used by multinational entities to lock ledger inputs, verify asset accounts, and manage corporate profit margins.",
    learns: [
      "General Ledger (GL) Accounting",
      "Accounts Payable & Accounts Receivable",
      "Asset Accounting",
      "Cost Center & Profit Center Accounting",
      "Financial Reporting & Budgeting",
      "Financial Closing & Controlling",
    ]

  },

  {
    slug: "SAP Material Management (MM)", categorySlug: "enterprise-courses", name: "SAP Material Management (MM)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Systematically manages raw material procurement, factory inventory control, stock checks, and vendor invoices. Optimizes supply chain lifecycles by balancing raw inventory stocks against active factory production requirements.",
    learns: [
      "Procurement & Purchasing Process",
      "Vendor Management",
      "Inventory & Stock Management",
      "Material Master Data",
      "Purchase Orders & Goods Receipt",
      "Invoice Verification & Warehouse",
      "Management",

    ]
  },

  {
    slug: "SAP Production and Planning (PP)", categorySlug: "enterprise-courses", name: "SAP Production and Planning (PP)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Used to track daily factory production schedules, master planning, shop floor execution, and material requirements (MRP). Enables manufacturing planners to eliminate factory floor idle times and automate bulk material orders smoothly.",
    learns: [
      "Production Planning & Scheduling",
      "Bill of Materials (BOM)",
      "Work Centers & Routing",
      "Material Requirements Planning (MRP)",
      "Production Orders & Execution",
      "Capacity Planning & Production Monitoring",
    ]
  },

  {
    slug: "SAP Sales and Distribution (SD)", categorySlug: "enterprise-courses", name: "SAP Sales and Distribution (SD)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Manages corporate-level product shipping, billing matrices, customer order processing, and delivery management. Streamlines the full order-to-cash business process cycle for lightning-fast international client fulfillment operations.",
    learns: [
      "Customer Master Data",
      "Sales Order Processing",
      "Pricing & Billing",
      "Shipping & Delivery Management",
      "Credit & Customer Management",
      "Sales Reporting & Analytics",
    ]
  },


  // Project Management //

  {
    slug: "Primavera Project Planning and Management (Foundation)", categorySlug: "project-courses", name: "Primavera Project Planning and Management (Foundation)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Introduces fundamental project management concepts, Work Breakdown Structures (WBS), and initial planning frameworks. Builds the primary framework for managing infrastructure milestones and defining contractual clear dependencies.",
    learns: [
      "Project Structure",
      "Project Creation",
      "Work Breakdown Structure (WBS)",
      "Relationships & Constraints",
      "Activity Codes",
      "Resource Analysis & Levelling",
      "Project Progress Tracking",
      "Performance Reporting",
      "Check-In & Check-Out",
      "Reflection & Project Review",
    ]
  },

  {
    slug: "Primavera Scheduling Professional (SPP)", categorySlug: "project-courses", name: "Primavera Scheduling Professional (SPP)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Focuses on the Critical Path Method (CPM), mapping complex activity dependencies, and managing massive project timelines. Trains planners to manage multi-tiered calendars, resource leveling curves, and critical timeline baseline controls.",
    learns: [
      "Precedence Diagraming",
      "Representing Project Schedules",
      "Resource Optimization Techniques",
      "Schedule Compression Techniques",
    ]
  },

  {
    slug: "Primavera Tracking Professional (TP)", categorySlug: "project-courses", name: "Primavera Tracking Professional (TP)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Compares planned timelines against actual field progress during execution to track project delays, variances, and performance metrics. Gives management the precise metric analysis required to execute real-time structural cost-recovery strategies during active construction delays.",
    learns: [
      "Budgeting",
      "Funding",
      "Portfolios",
      "Dashboards",
      "Time Sheet",
      "Team Member",
      "Risk Management",
      "Issue Management",
    ]
  },

  {
    slug: "Primavera Application Administration (AA)", categorySlug: "project-courses", name: "Primavera Application Administration (AA)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Manages the software's backend administration, including database setup, user permissions, and Enterprise Project Structure (EPS) configurations. Crucial for IT managers setting up secure data sharing protocols for vast engineering task forces globally.",
    learns: [
      "Managing Primavera Users",
      "Managing Project Structure -- EPS, OBS",
      "Resource Administration",
      "Customization of Portfolios & Dashboards",
    ]
  },



  // Finance & Accounting //

  {
    slug: "Business Accounting and Taxation", categorySlug: "finance-courses", name: "Business Accounting and Taxation", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Covers daily ledger accounting, financial statement preparation, and core corporate taxation like GST and TDS calculations. Bridges theoretical finance with practical corporate compliance reporting required by active commercial enterprises.",
    learns: [
      "Practical Accounting & Bookkeeping",
      "Direct & Indirect Taxation (GST & Income Tax)",
      "Tally Prime, Advanced Excel & Payroll Training",
      "GST, Income Tax, ESI & PT Return Filing",
      "Gulf Taxation & SUMO Payroll Software",
      "100% Hands-on Training with Real-Time Industry Projects",

    ]
  },

  {
    slug: "Tally Prime Foundation", categorySlug: "finance-courses", name: "Tally Prime Foundation", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Helps you learn the basics of Tally software navigation, simple voucher entries, inventory setup, and invoice generation. The core stepping stone for accounting students seeking immediate entry into SME corporate bookkeeping fields.",
    learns: [
      "Fundamentals of Accounting",
      "Introduction, Downloading and Installation of (Tally Prime)",
      "Migration Tally. ERP 9 Data to Tally Prime",
      "Accounting Masters",
      "Inventory Masters",
      "Accounting Vouchers",
      "Inventory Vouchers",
      "Reports",

    ]
  },

  {
    slug: "Tally Prime Advanced", categorySlug: "finance-courses", name: "Tally Prime Advanced", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Handles advanced inventory tracking, multi-currency processing, complex payrolls, and detailed statutory compliance for GST filing. Prepares corporate tax accountants to process manufacturing journals, handle exports, and auto-reconcile bank statements.",
    learns: [
      "Advanced Accounting in Tally Prime",
      "Advanced Inventory in Tally Prime",
      "Taxes in Tally Prime-- GST & TDS",
      "Payroll Accounting",
      "Technological Advantages",
      "Reports",

    ]
  },

  {
    slug: "Tally Prime Complete", categorySlug: "finance-courses", name: "Tally Prime Complete", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "A complete course covering everything from basic bookkeeping to financial reporting, auditing features, and backup data management. Provides the full master-level skill set required to operate as an independent commercial auditor or lead retail accountant.",
    learns: [
      "Fundamentals of Accounting",
      "Introduction, Downloading and Installation of (Tally Prime)",
      "Migration Tally. ERP 9 Data to Tally Prime",
      "Accounting Masters",
      "Inventory Masters",
      "Accounting Vouchers",
      "Inventory Vouchers",
      "Advanced Accounting in TallyPrime",
      "Advanced Inventory in TallyPrime",
      "Taxes in TallyPrime-- GST & TDS",
      "Payroll Accounting",
      "Technological Advantages",
      "Reports",

    ]
  },

  // General CAD & QA //

  {
    slug: "AutoCAD Essential", categorySlug: "general-courses", name: "AutoCAD Essential", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "A building-block course covering basic engineering drafting symbols, simple blueprints, and accurate 2D layouts. The foundational prerequisite required to open, read, print, and navigate standard multi-industry engineering drawings.",
    learns: [
      "Drafting - Best Practices",
      "File Management",
      "Drawing entities",
      "Editing Entities",
      "Object Properties",
      "Annotation",
      "Views & Dimensioning",
      "Symbols & BOM",
      "Plotting",
      "Printing Drawing",
    ]
  },

  {
    slug: "Proficient in CAD", categorySlug: "general-courses", name: "Proficient in CAD", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Advanced engineering design training focused on systematic structural views and industry-standard 2D/3D drafting frameworks. Develops advanced file sharing mechanics, layer standardizations, and custom dynamic block programming skills.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Drafting - Best Practices",
          "File Management",
          "Drawing entities",
          "Editing Entities",
          "Object Properties",
          "Annotation",
          "Views & Dimensioning",
          "Symbols & BOM",
          "Plotting",
          "Printing Drawing",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "2D Sketches",
          "Reference Plane",
          "Features",
          "Assemblies",
          "Advanced Assembly",
          "Sheet Metal Design",
          "Surface Modeling",
          "Detailing",
          "Freeform Modeling",
        ]
      }
    ]
  },

  {
    slug: "Proficient in QA/QC", categorySlug: "general-courses", name: "Proficient in QA/QC", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Teaches quality testing and structural inspection procedures to ensure construction works perfectly match standard engineering codes. Prepares site inspection teams to manage non-conformance reports, concrete crush checks, and material testing audits.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "Radiographic Testing",
          "Magnetic Particle Testing",
          "Ultrasonic Testing",
          "Liquid Penetrant Testing",
          "Visual Testing",
          "General Safety",
          "Welding Inspection",


        ]
      },
      {
        title: "Module 2",
        learns: [
          "2D Sketches",
          "Reference Plane",
          "Features",
          "Assemblies",
          "Advanced Assembly",
          "Sheet Metal Design",
          "Surface Modeling",
          "Detailing",
          "Freeform Modeling",
        ]
      }
    ]
  },


  // Data Analytics & Reporting //

  {
    slug: "MS Excel (Basics)", categorySlug: "data-courses", name: "MS Excel (Basics)", desc: "From basics to automation & APIs.", duration: "3 Months", cat: "IT", image: imgPython,
    details: "A fundamental spreadsheet course covering basic formulas, data filtering, and formatting raw data into structured tables. The ultimate essential professional life skill utilized across every office department globally to organize daily numeric data.",
    learns: [
      "Introduction to MS Office",
      "Entering Data in Cells",
      "Inserting Rows & Columns",
      "Number Formatting",
      "Tables & Pictures",
      "Charts (Column, Bar, Pie, Line & Scatter)",
      "Sort & Filter",
      "Data Validation & Remove Duplicates",
      "Excel Formulas & Functions",
      "Workbook Saving, Printing & Recovery",
    ]
  },

  {
    slug: "Advanced Excel", categorySlug: "data-courses", name: "Advanced Excel", desc: "MERN stack with live projects.", duration: "5 Months", cat: "IT", image: imgFullStack,
    details: "Focuses on creating dynamic dashboards, automating lookups, complex data manipulation, and building macro tools for documentation. Unlocks powerful corporate data mining capabilities using arrays, advanced pivot logic, and power query automation.",
    learns: [
      "Creation of personalized templates",
      "Knowledge on how to work with sparklines",
      "Basic knowledge on how to create and manage scenarios",
      "Use of Goal Seek and Solver",
      "Creation, management, and formatting pivot tables and pivot charts",
      "Use of Excel mathematical functions",
      "Creation and writing knowledge on complex formulas",
      "Perform data lookups",
      "Creation and use IF statements",
      "Use of Excel's data functions",
      "Creation and use data validation rules",
      "Application of custom and prebuilt conditional formatting",
      "How to work with functions to manipulate strings of text and data",
      "Creation and use of macros",
      "Creation of pivot tables and pivot charts",
      "Use of queries to import external data",
      "Import and clean data",
      "How to link and consolidate worksheets and workbooks",

    ]
  },

  {
    slug: "Microsoft Power BI", categorySlug: "data-courses", name: "Microsoft Power BI", desc: "Python, ML, Pandas & visualization.", duration: "5 Months", cat: "IT", image: imgDataScience,
    details: "A top data analytics application used to transform raw data reports into interactive visual charts and real-time business insights. Enables tracking analysts to blend disparate corporate database matrices into stunning, auto-updating executive web reports.",
    learns: [
      "Introducing Power BI Desktop",
      "Connecting & Shaping Data with Power BI Desktop",
      "Creating Table Relationships & Data Models in Power BI",
      "Analyzing Data with DAX calculations in Power BI",
      "Visualizing Data with Power BI Reports",
      "Artificial Intelligence (AI) Visuals",
      "Project",


    ]
  },


  // Electrical & Electronics //

  {
    slug: "Proficient in AutoCAD for Electrical & Electronics Engineers", categorySlug: "electrical-courses", name: "Proficient in AutoCAD for Electrical & Electronics Engineers", desc: "From basics to automation & APIs.", duration: "3 Months", cat: "IT", image: imgPython,
    details: "Dedicated drafting tool for drawing electrical circuit schematics, internal panel wiring routings, and single-line diagrams. Ensures sub-station layouts and panel internal connection profiles flawlessly follow global industrial layout rules.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "IEC Standards",
          "Electrical sub-station drawings",
          "Residential electrical plan",
          "Commercial electrical plan",
          "Electronic diagrams",
          "Integrated circuit schematics",
          "PCB Layout",
          "Abbreviations - IS",
          "IEC role in the loT",
          "loT Symbols",
        ]
      },
      {
        title: "Module 2",
        learns: [
          "Drafting basic geometry",
          "Advanced drafting & Modifying",
          "Blocks & Attributes",
          "External Ref & OLE",
          "Layout, plot & publish",
          "Symbol & Circuit Builder",
          "Schematic component tools",
          "Programmable logic controller",
          "Wires & Wire numbers tools",
          "Connectors & Panels",

        ]
      }
    ]
  },

  {
    slug: "Proficient in Electrical CAD", categorySlug: "electrical-courses", name: "Proficient in Electrical CAD", desc: "MERN stack with live projects.", duration: "5 Months", cat: "IT", image: imgFullStack,
    details: "Used to design and manage industrial automation layouts, electrical wiring harnesses, and component layout logic. Teaches you how to build database-linked terminal diagrams that automatically update PLC terminal schedules.",
    modules: [
      {
        title: "Module 1",
        learns: [
          "AutoCAD Electrical GUI",
          "PLC",
          "Creating Library Symbol",
          "Component Tools",
          "Component Attribute Tools",
          "Wire Numbers",
          "Conversion Tool",
          "Panel & Terminals",
          "Audit & Reports",

        ]
      },
      {
        title: "Module 2",
        learns: [
          "Work sharing",
          "Family Creation",
          "Symbols & Annotations",
          "Mechanical Design",
          "Mechanical System & Duct Work",
          "Mechanical Piping System",
          "Electrical Design",
          "Fire Alarm Model",
          "Plumbing Design",
          "Drafting & Detailing",

        ]
      }
    ]
  },


  // Digital Marketing //

  {
    slug: "Certified Digital Marketing Program (Foundation)", categorySlug: "digital-courses", name: "Certified Digital Marketing Program (Foundation)", desc: "From basics to automation & APIs.", duration: "3 Months", cat: "IT", image: imgPython,
    details: "Explores online business promotion methods, search engine optimization setups, and internet tools to maximize audience reach. Provides the vital strategic framework needed to execute targeted social campaigns and analyze digital customer traffic patterns.",
    learns: [
      "Digital Marketing Overview Domain Names & Hosting",
      "Understanding Content Management Systems Structure your Website using Wordpress",
      "SEO Plugins and Meta Tags Understanding",
      "Free Tools to get Copyright Free images",
      "Image Editing and create free Ebooks using Canva",
      "Evolution of Search Engine. Understanding SEO",
      "On--page and Off--page Optimization Techniques",
      "Keyword Research Tools",
      "Laser Focus Techniques to generate Quality Traffic and Leads. Advance SEO Techniques",
      "Understanding Backlinks (Do--follow & No--follow backlinks",
      "Domain Authority checker tools & understanding",
      "SEM (Search Engine Optimization)",
      "Setup Google Ads Platform",

    ]
  },


];

export const placementCompanies = ["Larsen & Toubro", "TCS", "Infosys", "Wipro", "Cognizant", "L&T Construction", "Godrej", "Ashok Leyland", "HCL", "Accenture", "Mahindra", "Capgemini"];

export const placementStories = [
  { name: "Karthik R.", role: "AutoCAD Designer", company: "L&T Construction", pkg: "₹4.8 LPA", course: "Civil CAD" },
  { name: "Priya M.", role: "Mechanical Engineer", company: "Ashok Leyland", pkg: "₹5.2 LPA", course: "CATIA + SolidWorks" },
  { name: "Suresh K.", role: "Full Stack Developer", company: "TCS", pkg: "₹6.5 LPA", course: "Full Stack Development" },
  { name: "Divya S.", role: "BIM Engineer", company: "AECOM India", pkg: "₹5.8 LPA", course: "Revit Architecture" },
  { name: "Arun V.", role: "Python Developer", company: "Infosys", pkg: "₹4.5 LPA", course: "Python Programming" },
  { name: "Sneha P.", role: "Design Engineer", company: "Godrej", pkg: "₹5.0 LPA", course: "AutoCAD" },
  // { name: "Rahul M.", role: "Java Developer", company: "Wipro", pkg: "₹6.0 LPA", course: "Java Full Stack" },
  { name: "Nandini T.", role: "Data Analyst", company: "Cognizant", pkg: "₹5.5 LPA", course: "Data Science" },
];

export const galleryImages = [
  { src: g1, alt: "CAD training lab", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Graduation ceremony", span: "" },
  { src: g3, alt: "Classroom session", span: "" },
  { src: g4, alt: "Placement interview", span: "md:col-span-2" },
  // Reusing images to create a larger gallery
  { src: g5, alt: "Advanced IT Lab", span: "" },
  { src: g7, alt: "Practical Session", span: "md:col-span-2" },
  { src: g8, alt: "Career Guidance", span: "" },
  { src: g9, alt: "Placement interview", span: "md:col-span-2" },
  { src: g10, alt: "Advanced IT Lab", span: "" },
  { src: g11, alt: "Group Discussion", span: "" },
];

export const testimonialsData = [
  { name: "Aravind P.", course: "AutoCAD + Revit", text: " CADDXPERT changed my career. The trainers explain every concept practically, and I got placed within a month of finishing my course.", rating: 5 },
  { name: "Meena R.", course: "Full Stack Development", text: "Loved the live projects and one-on-one mentorship. The placement team helped me crack my first developer interview.", rating: 5 },
  { name: "Vignesh S.", course: "CATIA", text: "Best institute in Tiruvarur for mechanical CAD. Industry-grade labs and friendly faculty. Highly recommended!", rating: 5 },
  { name: "Lakshmi K.", course: "Python + Data Science", text: "Hands-on training with real datasets. I now work as a data analyst thanks to CADPOINT's career support.", rating: 5 },
  { name: "Rohit V.", course: "Java Full Stack", text: "The curriculum is very up-to-date with current industry standards. The mock interviews were especially helpful.", rating: 5 },
];

export const subCourseMap: Record<string, string[]> = courseCategories.reduce((acc, category) => {
  acc[category.name] = courses
    .filter((course) => course.categorySlug === category.slug)
    .map((course) => course.name);
  return acc;
}, {} as Record<string, string[]>);
