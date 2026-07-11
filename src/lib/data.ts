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
  { slug: "civil-courses", name: "Civil & Architecture", desc: "Design, architectural and structural modeling.", image: imgAutocad },
  { slug: "mechanical-courses", name: "Mechanical & Aerospace", desc: "Site plans and civil drafting.", image: imgCivil },
  { slug: "mep-courses", name: "MEP, Piping & Plant", desc: "Part modeling, assembly & product design.", image: imgMech },
  { slug: "enterprise-courses", name: "Enterprise Resource Planning", desc: "Schematic and wiring design.", image: imgElec },
  { slug: "project-courses", name: "Project Management", desc: "Schematic and wiring design.", image: imgElec },
  { slug: "finance-courses", name: "Finance & Accounting", desc: "Software development, IT & Data Science.", image: imgFullStack },
  { slug: "general-courses", name: "General CAD & QA", desc: "Business accounting & finance.", image: imgTally },
  { slug: "data-courses", name: "Data Analytics & Reporting", desc: "Business accounting & finance.", image: imgTally },
  { slug: "electrical-courses", name: "Electrical & Electronics", desc: "Business accounting & finance.", image: imgTally },
  { slug: "digital-courses", name: "Digital Marketing", desc: "Business accounting & finance.", image: imgTally },

];


export const courses = [

  { slug: "Design Visualization Essential", categorySlug: "civil-courses", name: "Design Visualization Essential", desc: "Part modeling, assembly & drafting.", duration: "3 Months", cat: "Mech", image: imgMech,
    details: "Focus on the mechanical aspects of CAD. You'll learn parametric part modeling, complex assemblies, and how to generate production-ready drafting and detailing.",
   learns: [
      "Inference Techniques",
      "Modeling Entities",
      "Push/Pull Modification",
      "Object Editing",
      "Measurement & Annotation",
      "Match photo modeling",
      "Components: General & Dynamic",
      "Modeling from DWG",
      "Model visualization",
      "Model documentation",
    ] },

    { slug: "V-Ray Essential", categorySlug: "civil-courses", name: "V-Ray Essential", desc: "Advanced surface & product design.", duration: "3 Months", cat: "Mech", image: imgCatia,
    details: "Master advanced product design with CATIA. This course focuses on complex surface modeling, mechanical design, and assemblies used in aerospace and automotive industries.",
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
    ] },

    { slug: "SketchUp Essential", categorySlug: "civil-courses", name: "SketchUp Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings.",
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
    ]  },

    { slug: "Revit Architecture Essential", categorySlug: "civil-courses", name: "Revit Architecture Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings.",
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
    ]  },

    { slug: "STAAD .Pro Essential", categorySlug: "civil-courses", name: "STAAD .Pro Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings.",
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
    ] },

    { slug: "Construction Management using MSP", categorySlug: "civil-courses", name: "Construction Management using MSP", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings.",
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
    ]  },

    { slug: "Max for Engineers/Architects Essential", categorySlug: "civil-courses", name: "Max for Engineers/Architects Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "ETABS Essential", categorySlug: "civil-courses", name: "ETABS Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "MSP with PPM Concepts Essential", categorySlug: "civil-courses", name: "MSP with PPM Concepts Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "Building Estimation and Costing with Simulation", categorySlug: "civil-courses", name: "Building Estimation and Costing with Simulation", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "ProSteel Essential", categorySlug: "civil-courses", name: "ProSteel Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "Ansys Civil Essential", categorySlug: "civil-courses", name: "Ansys Civil Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "AECOsim Essential", categorySlug: "civil-courses", name: "AECOsim Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "AutoCAD Civil 3D Essential", categorySlug: "civil-courses", name: "AutoCAD Civil 3D Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "MicroStation Essential", categorySlug: "civil-courses", name: "MicroStation Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "MX Road Essential", categorySlug: "civil-courses", name: "MX Road Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "RCC Detailing Essential", categorySlug: "civil-courses", name: "RCC Detailing Essential", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "Proficient in AutoCAD for Civil Engineers and Architects", categorySlug: "civil-courses", name: "Proficient in AutoCAD for Civil Engineers and Architects", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "Proficient in Revit", categorySlug: "civil-courses", name: "Proficient in Revit", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "Proficient in STAAD.Pro", categorySlug: "civil-courses", name: "Proficient in STAAD.Pro", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "Proficient in Primavera for Construction Management", categorySlug: "civil-courses", name: "Proficient in Primavera for Construction Management", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "Proficient in Interior & Architectural Design", categorySlug: "civil-courses", name: "Proficient in Interior & Architectural Design", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "Proficient in Construction Management using Primavera & MSP", categorySlug: "civil-courses", name: "Proficient in Construction Management using Primavera & MSP", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },

    { slug: "Proficient in 3D BIM", categorySlug: "civil-courses", name: "Proficient in 3D BIM", desc: "Parametric 3D modeling.", duration: "3 Months", cat: "Mech", image: imgSolidworks,
    details: "Become proficient in SolidWorks. Learn parametric 3D modeling, sheet metal design, weldments, and how to create detailed engineering drawings." },
  
      { slug: "Proficient in BIM for Transportation Design", categorySlug: "civil-courses", name: "Proficient in BIM for Transportation Design", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Proficient in BIM for Structural Design", categorySlug: "civil-courses", name: "Proficient in BIM for Structural Design", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Proficient in 5D BIM", categorySlug: "civil-courses", name: "Proficient in 5D BIM", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },



    // Mechanical & Aerospace //

      { slug: "GD&T-Essential", categorySlug: "mechanical-courses", name: "GD&T Essential", desc: "2D & 3D drafting for design professionals.", duration: "2 Months", cat: "CAD", image: imgAutocad,
    details: "Learn the industry standard for computer-aided design. This comprehensive AutoCAD course covers everything from basic 2D drafting commands to advanced 3D modeling techniques. Perfect for beginners and professionals looking to upgrade their skills." },

  { slug: "Creo Essential", categorySlug: "mechanical-courses", name: "Creo Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

    { slug: "NX CAD Essential", categorySlug: "mechanical-courses", name: "NX CAD Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "SolidWorks Essential", categorySlug: "mechanical-courses", name: "SolidWorks Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "CATIA Essential", categorySlug: "mechanical-courses", name: "CATIA Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Ansys Workbench Essential", categorySlug: "mechanical-courses", name: "Ansys Workbench Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Mastercam Essential", categorySlug: "mechanical-courses", name: "Mastercam Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Ansys Fluent Essential", categorySlug: "mechanical-courses", name: "Ansys Fluent Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Autodesk Inventor Essential", categorySlug: "mechanical-courses", name: "Autodesk Inventor Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "CATIA Kinematics Essential", categorySlug: "mechanical-courses", name: "CATIA Kinematics Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Creo Simulate Essential", categorySlug: "mechanical-courses", name: "Creo Simulate Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "HyperMesh Essential", categorySlug: "mechanical-courses", name: "HyperMesh Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "NX Nastran Essential", categorySlug: "mechanical-courses", name: "NX Nastran Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "NX CAM Essential", categorySlug: "mechanical-courses", name: "NX CAM Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Reverse Engineering using CATIA Essential", categorySlug: "mechanical-courses", name: "Reverse Engineering using CATIA Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "SolidWorks Motion Essential", categorySlug: "mechanical-courses", name: "SolidWorks Motion Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Non-Destructive Testing Essential", categorySlug: "mechanical-courses", name: "Non-Destructive Testing Essential", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Proficient in AutoCAD for Mechanical Engineers", categorySlug: "mechanical-courses", name: "Proficient in AutoCAD for Mechanical Engineers", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Proficient in Creo", categorySlug: "mechanical-courses", name: "Proficient in Creo", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Proficient in SolidWork", categorySlug: "mechanical-courses", name: "Proficient in SolidWork", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Proficient in NX", categorySlug: "mechanical-courses", name: "Proficient in NX", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Proficient in CATIA", categorySlug: "mechanical-courses", name: "Proficient in CATIA", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Proficient in CAE", categorySlug: "mechanical-courses", name: "Proficient in CAE", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },

      { slug: "Proficient in Ansys", categorySlug: "mechanical-courses", name: "Proficient in Ansys", desc: "Site plans, layouts & structural drawings.", duration: "3 Months", cat: "Civil", image: imgCivil,
    details: "Master the tools needed for civil engineering drafting. Learn to create detailed site plans, floor plans, elevations, and structural drawings that meet industry standards." },



    
    // MEP, Piping & Plant //

  { slug: "PDMS Essential", categorySlug: "mep-courses", name: "PDMS Essential", desc: "Schematic, panel & wiring design.", duration: "2 Months", cat: "Elec", image: imgElec,
    details: "Specialized training for electrical engineers and draftsmen. Learn to create precise electrical schematics, panel layouts, and comprehensive wiring diagrams." },

  { slug: "HVAC Design Essential", categorySlug: "mep-courses", name: "HVAC Design Essential", desc: "BIM modeling for architects.", duration: "3 Months", cat: "BIM", image: imgRevit,
    details: "Step into the world of Building Information Modeling (BIM). This course teaches you how to design, coordinate, and document architectural projects efficiently using Revit." },

  { slug: "REVIT MEP Essential", categorySlug: "mep-courses", name: "REVIT MEP Essential", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "Proficient in MEP Design", categorySlug: "mep-courses", name: "Proficient in MEP Design", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "Proficient in HVAC and MEP Design", categorySlug: "mep-courses", name: "Proficient in HVAC and MEP Design", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "Proficient in Piping Design", categorySlug: "mep-courses", name: "Proficient in Piping Design", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "SP3D", categorySlug: "mep-courses", name: "SP3D", desc: "SP3D", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "E3D", categorySlug: "mep-courses", name: "E3D", desc: "E3D", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },


    // Enterprise Resource Planning //

     { slug: "SAP Finance and Controlling (FICO)", categorySlug: "enterprise-courses", name: "SAP Finance and Controlling (FICO)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "SAP Material Management (MM)", categorySlug: "enterprise-courses", name: "SAP Material Management (MM)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "SAP Production and Planning (PP)", categorySlug: "enterprise-courses", name: "SAP Production and Planning (PP)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "SAP Sales and Distribution (SD)", categorySlug: "enterprise-courses", name: "SAP Sales and Distribution (SD)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

  
      // Project Management //
      
      { slug: "Primavera Project Planning and Management (Foundation)", categorySlug: "project-courses", name: "Primavera Project Planning and Management (Foundation)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "Primavera Scheduling Professional (SPP)", categorySlug: "project-courses", name: "Primavera Scheduling Professional (SPP)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "Primavera Tracking Professional (TP)", categorySlug: "project-courses", name: "Primavera Tracking Professional (TP)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "Primavera Application Administration (AA)", categorySlug: "project-courses", name: "Primavera Application Administration (AA)", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },



    // Finance & Accounting //

     { slug: "Business Accounting and Taxation", categorySlug: "finance-courses", name: "Business Accounting and Taxation", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "Tally Prime Foundation", categorySlug: "finance-courses", name: "Tally Prime Foundation", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "Tally Prime Advanced", categorySlug: "finance-courses", name: "Tally Prime Advanced", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "Tally Prime Complete", categorySlug: "finance-courses", name: "Tally Prime Complete", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      // General CAD & QA //

       { slug: "AutoCAD Essential", categorySlug: "general-courses", name: "AutoCAD Essential", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "Proficient in CAD", categorySlug: "general-courses", name: "Proficient in CAD", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },

      { slug: "Proficient in QA/QC", categorySlug: "general-courses", name: "Proficient in QA/QC", desc: "Structural analysis & design.", duration: "2 Months", cat: "Civil", image: imgStaad,
    details: "Learn advanced structural analysis and design. This course covers everything from modeling and loading to analyzing and designing complex concrete and steel structures." },


    // Data Analytics & Reporting //

  { slug: "MS Excel (Basics)", categorySlug: "data-courses", name: "MS Excel (Basics)", desc: "From basics to automation & APIs.", duration: "3 Months", cat: "IT", image: imgPython,
    details: "Start your programming journey with Python. This course covers core concepts, data structures, object-oriented programming, and practical automation scripts." },

  { slug: "Advanced Excel", categorySlug: "data-courses", name: "Advanced Excel", desc: "MERN stack with live projects.", duration: "5 Months", cat: "IT", image: imgFullStack,
    details: "Master the MERN stack (MongoDB, Express.js, React, Node.js). Build responsive frontends and robust backends through hands-on, live project development." },
    
  { slug: "Microsoft Power BI", categorySlug: "data-courses", name: "Microsoft Power BI", desc: "Python, ML, Pandas & visualization.", duration: "5 Months", cat: "IT", image: imgDataScience,
    details: "Dive into data science. Learn data manipulation with Pandas, data visualization techniques, and foundational Machine Learning algorithms using Python." },


       // Electrical & Electronics //

  { slug: "Proficient in AutoCAD for Electrical & Electronics Engineers", categorySlug: "electrical-courses", name: "Proficient in AutoCAD for Electrical & Electronics Engineers", desc: "From basics to automation & APIs.", duration: "3 Months", cat: "IT", image: imgPython,
    details: "Start your programming journey with Python. This course covers core concepts, data structures, object-oriented programming, and practical automation scripts." },

  { slug: "Proficient in Electrical CAD", categorySlug: "electrical-courses", name: "Proficient in Electrical CAD", desc: "MERN stack with live projects.", duration: "5 Months", cat: "IT", image: imgFullStack,
    details: "Master the MERN stack (MongoDB, Express.js, React, Node.js). Build responsive frontends and robust backends through hands-on, live project development." },


       // Digital Marketing //

  { slug: "Certified Digital Marketing Program (Foundation)", categorySlug: "digital-courses", name: "Certified Digital Marketing Program (Foundation)", desc: "From basics to automation & APIs.", duration: "3 Months", cat: "IT", image: imgPython,
    details: "Start your programming journey with Python. This course covers core concepts, data structures, object-oriented programming, and practical automation scripts." },


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
