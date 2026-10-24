/* IVAL site content. Edit freely: themes, faculty, featured projects and news.
   Publications are generated separately (tools/update_publications.py).
   team[].role is PD (Postdoctoral Researcher) or RS (Research Scientist); photo may be null (initials are shown).
   themes[].examples lists the project short names shown as chips on each theme card;
   projects[].theme must be one of the theme keys; set featured: true to show a project on the homepage. */
window.IVAL_DATA = {
  "themes": [
    {
      "key": "mm",
      "slot": "s1",
      "icon": "multimodal",
      "name": "Multimodal Foundation Models",
      "short": "Multimodal LLMs",
      "desc": "Vision–language models that converse, ground answers down to the pixel, reason step by step and act as tool-using agents, plus multilingual and culturally inclusive benchmarks.",
      "examples": [
        "GLaMM",
        "LLaVA++",
        "MaPLe",
        "Perception Encoder",
        "PerceptionLM"
      ]
    },
    {
      "key": "video",
      "slot": "s2",
      "icon": "video",
      "name": "Video Understanding",
      "short": "Video",
      "desc": "Video conversation models, pixel-level grounding over time, long-video reasoning across vision, speech and audio, and benchmarks that test it.",
      "examples": [
        "Video-ChatGPT",
        "VideoGPT+",
        "VideoGLaMM",
        "Video-R2",
        "Video-CoM",
        "VideoMathQA"
      ]
    },
    {
      "key": "perception",
      "slot": "s3",
      "icon": "perception",
      "name": "Visual Perception & 3D",
      "short": "Perception & 3D",
      "desc": "Open-world and open-vocabulary detection, segmentation and tracking, 3D instance segmentation and grounding, and embodied reasoning.",
      "examples": [
        "Object-centric OVD",
        "Open-YOLO 3D",
        "OW-DETR",
        "Ground3D-LMM"
      ]
    },
    {
      "key": "earth",
      "slot": "s4",
      "icon": "earth",
      "name": "Earth Observation & Climate",
      "short": "Earth & climate",
      "desc": "Geospatial foundation models and assistants for multi-spectral, SAR and multi-temporal satellite imagery, from grounded dialogue to agentic analysis.",
      "examples": [
        "GeoChat",
        "GeoPixel",
        "EarthDial",
        "OpenEarthAgent"
      ]
    },
    {
      "key": "medical",
      "slot": "s5",
      "icon": "medical",
      "name": "Medical & Healthcare AI",
      "short": "Medical",
      "desc": "Bilingual medical LLMs and multimodal assistants, radiology report generation, medical image segmentation and trustworthy clinical models.",
      "examples": [
        "UNETR++",
        "XrayGPT",
        "UniMed-CLIP",
        "BiMediX2"
      ]
    },
    {
      "key": "trust",
      "slot": "s6",
      "icon": "efficient",
      "name": "Efficient, Robust & Generative Vision",
      "short": "Efficient & robust",
      "desc": "Mobile-ready backbones and small language models, adversarial robustness, image restoration, and controllable image and video generation.",
      "examples": [
        "MobiLlama",
        "EdgeNeXt",
        "SwiftFormer",
        "Mobile-O"
      ]
    }
  ],
  "faculty": [
    {
      "key": "salman",
      "name": "Salman Khan",
      "title": "Professor, MBZUAI\nAdjunct, Australian National University",
      "bio": "Salman's research covers model generalization, multimodal learning, learning from limited data (zero- and few-shot) and continual lifelong learning for computer vision. He is a founding faculty member of MBZUAI, co-founder of Apertix and a Fellow at ADIA Lab.",
      "interests": [
        "Multimodal LLMs",
        "Earth observation",
        "Continual learning",
        "Robust vision"
      ],
      "honours": [
        "Clarivate Highly Cited Researcher 2025",
        "MBZUAI Distinguished Research Award 2025",
        "Program Chair, ACCV 2028"
      ],
      "aliases": [
        "S Khan",
        "SH Khan",
        "Salman Khan",
        "Salman H. Khan"
      ],
      "photo": "assets/img/team/salman.jpg",
      "email": "salman.khan@mbzuai.ac.ae",
      "links": {
        "homepage": "https://salman-h-khan.github.io/",
        "scholar": "https://scholar.google.com/citations?user=M59O9lkAAAAJ",
        "mbzuai": "https://mbzuai.ac.ae/study/faculty/salman-khan/"
      }
    },
    {
      "key": "fahad",
      "name": "Fahad Shahbaz Khan",
      "title": "Professor & Deputy Chair of Computer Vision, MBZUAI · Linköping University",
      "bio": "Fahad's research spans computer vision and machine learning, including object recognition, visual tracking, large multimodal models, 3D understanding and remote sensing. He also holds a faculty post at Linköping University's Computer Vision Laboratory in Sweden.",
      "interests": [
        "Detection & segmentation",
        "Visual tracking",
        "Multimodal models",
        "Generative AI"
      ],
      "honours": [
        "Associate Editor, IEEE TPAMI",
        "General Chair, ACCV 2028",
        "Best Paper Finalist, CVPR 2022 & MICCAI 2024"
      ],
      "aliases": [
        "FS Khan",
        "F Khan",
        "F Shahbaz Khan",
        "Fahad Shahbaz Khan",
        "Fahad Khan"
      ],
      "photo": "assets/img/team/fahad.jpg",
      "email": "fahad.khan@mbzuai.ac.ae",
      "links": {
        "homepage": "https://sites.google.com/view/fahadkhans/home",
        "scholar": "https://scholar.google.com/citations?user=zvaeYnUAAAAJ",
        "mbzuai": "https://mbzuai.ac.ae/study/faculty/fahad-khan/"
      }
    },
    {
      "key": "hisham",
      "name": "Hisham Cholakkal",
      "title": "Assistant Professor of Computer Vision, MBZUAI",
      "bio": "Hisham's research focuses on multimodal large language models across vision, audio, speech and text, with applications in healthcare and smart wearables. He is a founding faculty member of MBZUAI.",
      "interests": [
        "Multimodal LLMs",
        "Healthcare AI",
        "Speech & conversational AI",
        "Arabic–English AI"
      ],
      "honours": [
        "Meta Llama Impact Innovation Award 2024",
        "MBZUAI Teaching Excellence Award 2025",
        "General Chair, ACM Multimedia Asia 2026"
      ],
      "aliases": [
        "H Cholakkal",
        "Hisham Cholakkal"
      ],
      "photo": "assets/img/team/hisham.jpg",
      "email": "hisham.cholakkal@mbzuai.ac.ae",
      "links": {
        "homepage": "https://hishamcholakkal.com/",
        "scholar": "https://scholar.google.com/citations?user=bZ3YBRcAAAAJ",
        "mbzuai": "https://mbzuai.ac.ae/study/faculty/hisham-cholakkal/"
      }
    },
    {
      "key": "rao",
      "name": "Rao Muhammad Anwer",
      "title": "Assistant Professor of Computer Vision, MBZUAI",
      "bio": "Rao's research spans visual recognition, multimodal learning and visual reasoning, open-world perception, and efficient and robust deep learning. He joined MBZUAI in 2020 after research roles at the Inception Institute of AI and Aalto University.",
      "interests": [
        "Visual recognition",
        "Visual reasoning",
        "Open-world perception",
        "Efficient deep learning"
      ],
      "honours": [
        "Program Chair, ACM Multimedia Asia 2026",
        "Senior PC, AAAI 2026 & 2027",
        "Six granted US patents"
      ],
      "aliases": [
        "RM Anwer",
        "R Anwer",
        "RMA Anwer",
        "Rao Muhammad Anwer",
        "Rao Anwer"
      ],
      "photo": "assets/img/team/rao.jpg",
      "email": "rao.anwer@mbzuai.ac.ae",
      "links": {
        "homepage": "https://raoanwer.com/",
        "scholar": "https://scholar.google.com/citations?user=_KlvMVoAAAAJ",
        "mbzuai": "https://mbzuai.ac.ae/study/faculty/rao-muhammad-anwer/"
      }
    }
  ],
  "projects": [
    {
      "short": "Hard Vision, Easy Vision",
      "title": "Hard Vision, Easy Vision: What GPT-6 Astra Reveals Across Computer Vision",
      "venue": "arXiv 2026",
      "year": 2026,
      "theme": "mm",
      "profs": [
        "hisham",
        "fahad",
        "salman"
      ],
      "desc": "Evaluates GPT-6 Astra and five other frontier AI systems on 34 capabilities and 55 benchmarks across nine areas of computer vision, against dedicated models and humans, to map what is now easy and what remains hard.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2609.35718",
        "github": "https://github.com/mbzuai-oryx/frontier-vision"
      },
      "stars": 20,
      "featured": true
    },
    {
      "short": "OpenEarthAgent",
      "title": "OpenEarthAgent: A Unified Framework for Tool-Augmented Geospatial Agents",
      "venue": "ECCV 2026",
      "year": 2026,
      "theme": "earth",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Unified framework for building and training tool-augmented geospatial agents that reason over Earth observation data.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2602.17665",
        "github": "https://github.com/mbzuai-oryx/OpenEarthAgent",
        "project": "https://mbzuai-oryx.github.io/OpenEarthAgent/"
      },
      "stars": 129,
      "featured": true
    },
    {
      "short": "BiMediX2",
      "title": "BiMediX2: Bio-Medical EXpert LMM for Diverse Medical Modalities",
      "venue": "EMNLP 2025 (Findings)",
      "year": 2025,
      "theme": "medical",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Bilingual English-Arabic medical LMM that handles text and images across diverse medical imaging modalities.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2412.07769",
        "github": "https://github.com/mbzuai-oryx/BiMediX2"
      },
      "stars": 74,
      "featured": true
    },
    {
      "short": "LlamaV-o1",
      "title": "LlamaV-o1: Rethinking Step-by-step Visual Reasoning in LLMs",
      "venue": "ACL 2025 (Findings)",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Step-by-step visual reasoning model trained with curriculum learning, plus the VRC-Bench benchmark for evaluating reasoning chains.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2501.06186",
        "github": "https://github.com/mbzuai-oryx/LlamaV-o1",
        "project": "https://mbzuai-oryx.github.io/LlamaV-o1/"
      },
      "stars": 307,
      "featured": true
    },
    {
      "short": "EarthDial",
      "title": "EarthDial: Turning Multi-sensory Earth Observations to Interactive Dialogues",
      "venue": "CVPR 2025",
      "year": 2025,
      "theme": "earth",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Conversational assistant for multi-spectral, multi-temporal and multi-resolution Earth observation data, trained on over 11M instruction pairs.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2412.15190",
        "github": "https://github.com/hiyamdebary/EarthDial"
      },
      "stars": 148,
      "featured": true
    },
    {
      "short": "VideoGLaMM",
      "title": "VideoGLaMM: A Large Multimodal Model for Pixel-Level Visual Grounding in Videos",
      "venue": "CVPR 2025",
      "year": 2025,
      "theme": "video",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Video LMM that produces temporally consistent, pixel-level masks grounded in its conversational responses.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2411.04923",
        "github": "https://github.com/mbzuai-oryx/VideoGLaMM",
        "project": "https://mbzuai-oryx.github.io/VideoGLaMM/"
      },
      "stars": 106,
      "featured": true
    },
    {
      "short": "LLM Post-Training Survey",
      "title": "LLM Post-Training: A Deep Dive into Reasoning Large Language Models",
      "venue": "Survey · 2025",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Survey of fine-tuning, reinforcement learning and test-time scaling methods for reasoning LLMs, with a curated companion repository.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2502.21321",
        "github": "https://github.com/mbzuai-oryx/Awesome-LLM-Post-training"
      },
      "stars": 2578,
      "featured": true
    },
    {
      "short": "MobiLlama",
      "title": "MobiLlama: Towards Accurate and Lightweight Fully Transparent GPT",
      "venue": "ICLR 2025 Workshop",
      "year": 2025,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Fully transparent 0.5B small language model designed for accurate, resource-efficient on-device use.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2402.16840",
        "github": "https://github.com/mbzuai-oryx/MobiLlama"
      },
      "stars": 671,
      "featured": true
    },
    {
      "short": "GLaMM",
      "title": "GLaMM: Pixel Grounding Large Multimodal Model",
      "venue": "CVPR 2024",
      "year": 2024,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "First large multimodal model that generates conversational responses interleaved with pixel-level segmentation masks, trained on the 810M-region GranD dataset.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2311.03356",
        "github": "https://github.com/mbzuai-oryx/groundingLMM",
        "project": "https://grounding-anything.com"
      },
      "stars": 969,
      "featured": true
    },
    {
      "short": "GeoChat",
      "title": "GeoChat: Grounded Large Vision-Language Model for Remote Sensing",
      "venue": "CVPR 2024",
      "year": 2024,
      "theme": "earth",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "First grounded large vision-language model for remote sensing, supporting region-level dialogue and visual grounding on satellite imagery.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2311.15826",
        "github": "https://github.com/mbzuai-oryx/GeoChat",
        "project": "https://mbzuai-oryx.github.io/GeoChat"
      },
      "stars": 759,
      "featured": true
    },
    {
      "short": "Video-ChatGPT",
      "title": "Video-ChatGPT: Towards Detailed Video Understanding via Large Vision and Language Models",
      "venue": "ACL 2024",
      "year": 2024,
      "theme": "video",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Pioneering video conversation model with a 100K video-instruction dataset and a quantitative benchmark for video-based dialogue.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2306.05424",
        "github": "https://github.com/mbzuai-oryx/Video-ChatGPT",
        "project": "https://mbzuai-oryx.github.io/Video-ChatGPT"
      },
      "stars": 1513,
      "featured": true
    },
    {
      "short": "XrayGPT",
      "title": "XrayGPT: Chest Radiographs Summarization using Medical Vision-Language Models",
      "venue": "ACL 2024 BioNLP Workshop",
      "year": 2024,
      "theme": "medical",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Conversational medical vision-language model that summarises and answers questions about chest X-rays.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2306.07971",
        "github": "https://github.com/mbzuai-oryx/XrayGPT"
      },
      "stars": 531,
      "featured": true
    },
    {
      "short": "Agent-X",
      "title": "Agent-X: Evaluating Deep Multimodal Reasoning in Vision-Centric Agentic Tasks",
      "venue": "ICLR 2026",
      "year": 2026,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Benchmark of real-world, vision-centric agentic tasks that evaluates multi-step reasoning and tool use by multimodal agents.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2505.24876",
        "github": "https://github.com/mbzuai-oryx/Agent-X"
      },
      "stars": 46,
      "featured": false
    },
    {
      "short": "LLaVA++",
      "title": "LLaVA++: Extending Visual Capabilities with LLaMA-3 and Phi-3",
      "venue": "Open-source · 2024",
      "year": 2024,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Extends the LLaVA framework with LLaMA-3 and Phi-3 language backbones, releasing open models, code and demos.",
      "links": {
        "github": "https://github.com/mbzuai-oryx/LLaVA-pp"
      },
      "stars": 843,
      "featured": false
    },
    {
      "short": "MaPLe",
      "title": "MaPLe: Multi-modal Prompt Learning",
      "venue": "CVPR 2023",
      "year": 2023,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Learns coupled prompts in both the vision and language branches of CLIP for better generalisation to new classes and domains.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2210.03117",
        "github": "https://github.com/muzairkhattak/multimodal-prompt-learning",
        "project": "https://muzairkhattak.github.io/multimodal-prompt-learning/"
      },
      "stars": 824,
      "featured": false
    },
    {
      "short": "UNETR++",
      "title": "UNETR++: Delving into Efficient and Accurate 3D Medical Image Segmentation",
      "venue": "IEEE TMI 2024",
      "year": 2024,
      "theme": "medical",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Efficient hybrid transformer for 3D medical image segmentation using paired spatial-channel attention.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2212.04497",
        "github": "https://github.com/Amshaker/unetr_plus_plus"
      },
      "stars": 536,
      "featured": false
    },
    {
      "short": "EdgeNeXt",
      "title": "EdgeNeXt: Efficiently Amalgamated CNN-Transformer Architecture for Mobile Vision Applications",
      "venue": "ECCV 2022 Workshops (CADL, Oral)",
      "year": 2022,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Lightweight hybrid CNN-transformer backbone for mobile and edge vision applications.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2206.10589",
        "github": "https://github.com/mmaaz60/EdgeNeXt"
      },
      "stars": 421,
      "featured": false
    },
    {
      "short": "SwiftFormer",
      "title": "SwiftFormer: Efficient Additive Attention for Transformer-based Real-time Mobile Vision Applications",
      "venue": "ICCV 2023",
      "year": 2023,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Mobile vision transformer using linear-complexity efficient additive attention for real-time on-device inference.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2303.15446",
        "github": "https://github.com/Amshaker/SwiftFormer"
      },
      "stars": 316,
      "featured": false
    },
    {
      "short": "LLMVoX",
      "title": "LLMVoX: Autoregressive Streaming Text-to-Speech Model for Any LLM",
      "venue": "ACL 2025 (Findings)",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Lightweight 30M-parameter, LLM-agnostic streaming text-to-speech system that adds low-latency speech output to any language model.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2503.04724",
        "github": "https://github.com/mbzuai-oryx/LLMVoX",
        "project": "https://mbzuai-oryx.github.io/LLMVoX/"
      },
      "stars": 313,
      "featured": false
    },
    {
      "short": "Object-centric OVD",
      "title": "Bridging the Gap between Object and Image-level Representations for Open-Vocabulary Detection",
      "venue": "NeurIPS 2022",
      "year": 2022,
      "theme": "perception",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Open-vocabulary detector that aligns region features with CLIP and image-level supervision to detect novel categories.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2207.03482",
        "github": "https://github.com/hanoonaR/object-centric-ovd"
      },
      "stars": 296,
      "featured": false
    },
    {
      "short": "VideoGPT+",
      "title": "VideoGPT+: Integrating Image and Video Encoders for Enhanced Video Understanding",
      "venue": "arXiv 2024",
      "year": 2024,
      "theme": "video",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Combines image and video encoders for spatial detail and temporal context, and introduces the VCGBench-Diverse benchmark.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2406.09418",
        "github": "https://github.com/mbzuai-oryx/VideoGPT-plus"
      },
      "stars": 295,
      "featured": false
    },
    {
      "short": "Open-YOLO 3D",
      "title": "Open-YOLO 3D: Towards Fast and Accurate Open-Vocabulary 3D Instance Segmentation",
      "venue": "ICLR 2025 (Oral)",
      "year": 2025,
      "theme": "perception",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Fast open-vocabulary 3D instance segmentation that uses 2D detections to label 3D proposals.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2406.02548",
        "github": "https://github.com/aminebdj/OpenYOLO3D"
      },
      "stars": 270,
      "featured": false
    },
    {
      "short": "PG-Video-LLaVA",
      "title": "PG-Video-LLaVA: Pixel Grounding Large Video-Language Models",
      "venue": "arXiv 2023",
      "year": 2023,
      "theme": "video",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "First video LMM with pixel-level grounding that also uses audio transcripts to enrich video understanding.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2311.13435",
        "github": "https://github.com/mbzuai-oryx/Video-LLaVA",
        "project": "https://mbzuai-oryx.github.io/Video-LLaVA"
      },
      "stars": 263,
      "featured": false
    },
    {
      "short": "OW-DETR",
      "title": "OW-DETR: Open-world Detection Transformer",
      "venue": "CVPR 2022",
      "year": 2022,
      "theme": "perception",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Transformer detector for open-world detection that finds unknown objects and learns them incrementally.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2112.01513",
        "github": "https://github.com/akshitac8/OW-DETR"
      },
      "stars": 263,
      "featured": false
    },
    {
      "short": "UniMed-CLIP",
      "title": "UniMed-CLIP: Towards a Unified Image-Text Pretraining Paradigm for Diverse Medical Imaging Modalities",
      "venue": "arXiv 2024",
      "year": 2024,
      "theme": "medical",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Contrastive vision-language model trained on UniMed, an open 5.3M image-text dataset spanning six medical imaging modalities.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2412.10372",
        "github": "https://github.com/mbzuai-oryx/UniMed-CLIP"
      },
      "stars": 177,
      "featured": false
    },
    {
      "short": "Mobile-O",
      "title": "Mobile-O: Unified Multimodal Understanding and Generation on Mobile Device",
      "venue": "arXiv 2026",
      "year": 2026,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad",
        "hisham"
      ],
      "desc": "Compact unified model that performs both multimodal understanding and image generation directly on a mobile device.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2602.20161",
        "github": "https://github.com/Amshaker/Mobile-O",
        "project": "https://amshaker.github.io/Mobile-O/"
      },
      "stars": 160,
      "featured": false
    },
    {
      "short": "GeoPixel",
      "title": "GeoPixel: Pixel Grounding Large Multimodal Model in Remote Sensing",
      "venue": "ICML 2025",
      "year": 2025,
      "theme": "earth",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Remote-sensing LMM that produces pixel-level grounded conversations on high-resolution aerial imagery.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2501.13925",
        "github": "https://github.com/mbzuai-oryx/GeoPixel",
        "project": "https://mbzuai-oryx.github.io/GeoPixel/"
      },
      "stars": 157,
      "featured": false
    },
    {
      "short": "GroupMamba",
      "title": "GroupMamba: Efficient Group-Based Visual State Space Model",
      "venue": "CVPR 2025",
      "year": 2025,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Parameter-efficient visual state space (Mamba) backbone using grouped modulated scanning for classification, detection and segmentation.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2407.13772",
        "github": "https://github.com/Amshaker/GroupMamba",
        "project": "https://amshaker.github.io/GroupMamba/"
      },
      "stars": 143,
      "featured": false
    },
    {
      "short": "GEOBench-VLM",
      "title": "GEOBench-VLM: Benchmarking Vision-Language Models for Geospatial Tasks",
      "venue": "ICCV 2025",
      "year": 2025,
      "theme": "earth",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Comprehensive benchmark evaluating vision-language models across a wide range of geospatial tasks.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2411.19325",
        "github": "https://github.com/The-AI-Alliance/GEO-Bench-VLM"
      },
      "stars": 120,
      "featured": false
    },
    {
      "short": "ThinkGeo",
      "title": "ThinkGeo: Evaluating Tool-Augmented Agents for Remote Sensing Tasks",
      "venue": "CVPR 2026 Workshop (MONTI), Best Paper",
      "year": 2026,
      "theme": "earth",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Benchmark of agentic remote-sensing tasks evaluating how LLM agents plan and use tools over optical and SAR imagery.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2505.23752",
        "github": "https://github.com/mbzuai-oryx/ThinkGeo",
        "project": "https://mbzuai-oryx.github.io/ThinkGeo/"
      },
      "stars": 87,
      "featured": false
    },
    {
      "short": "PALO",
      "title": "PALO: A Polyglot Large Multimodal Model for 5B People",
      "venue": "WACV 2025 (Oral)",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Multilingual large multimodal model offering visual conversation in 10 major languages covering about two-thirds of the world population.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2402.14818",
        "github": "https://github.com/mbzuai-oryx/PALO"
      },
      "stars": 85,
      "featured": false
    },
    {
      "short": "ClimateGPT",
      "title": "Arabic Mini-ClimateGPT: A Climate Change and Sustainability Tailored Arabic LLM",
      "venue": "EMNLP 2023 (Findings)",
      "year": 2023,
      "theme": "earth",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Climate-change and sustainability conversational LLM for English and Arabic, built on Vicuna with a 500K-sample Clima500 dataset.",
      "links": {
        "github": "https://github.com/mbzuai-oryx/ClimateGPT",
        "arxiv": "https://aclanthology.org/2023.findings-emnlp.941/"
      },
      "stars": 80,
      "featured": false
    },
    {
      "short": "KITAB-Bench",
      "title": "KITAB-Bench: A Comprehensive Multi-Domain Benchmark for Arabic OCR and Document Understanding",
      "venue": "ACL 2025 (Findings)",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Benchmark for Arabic OCR and document understanding covering 9 domains, including handwriting, tables and charts.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2502.14949",
        "github": "https://github.com/mbzuai-oryx/KITAB-Bench",
        "project": "https://mbzuai-oryx.github.io/KITAB-Bench/"
      },
      "stars": 79,
      "featured": false
    },
    {
      "short": "DriveLMM-o1",
      "title": "DriveLMM-o1: A Step-by-Step Reasoning Dataset and Large Multimodal Model for Driving Scenario Understanding",
      "venue": "arXiv 2025",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Dataset and LMM for step-by-step reasoning over perception, prediction and planning in autonomous driving scenes.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2503.10621",
        "github": "https://github.com/ayesha-ishaq/DriveLMM-o1"
      },
      "stars": 73,
      "featured": false
    },
    {
      "short": "MediX-R1",
      "title": "MediX-R1: Open Ended Medical Reinforcement Learning",
      "venue": "arXiv 2026",
      "year": 2026,
      "theme": "medical",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Reinforcement-learning framework with composite rewards that trains medical multimodal models to give open-ended clinical answers.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2602.23363",
        "github": "https://github.com/mbzuai-oryx/MediX-R1",
        "project": "https://medix.cvmbzuai.com/"
      },
      "stars": 68,
      "featured": false
    },
    {
      "short": "VideoMolmo",
      "title": "VideoMolmo: Spatio-Temporal Grounding Meets Pointing",
      "venue": "arXiv 2025",
      "year": 2025,
      "theme": "video",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Video LMM that points to objects described in text and propagates points into temporally consistent masks.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2506.05336",
        "github": "https://github.com/mbzuai-oryx/VideoMolmo",
        "project": "https://mbzuai-oryx.github.io/VideoMolmo/"
      },
      "stars": 58,
      "featured": false
    },
    {
      "short": "BAPLe",
      "title": "BAPLe: Backdoor Attacks on Medical Foundational Models using Prompt Learning",
      "venue": "MICCAI 2024",
      "year": 2024,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad",
        "rao"
      ],
      "desc": "Shows medical foundation models can be backdoored cheaply through learnable prompts, exposing a new security risk.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2408.07440",
        "github": "https://github.com/asif-hanif/baple",
        "project": "https://asif-hanif.github.io/baple/"
      },
      "stars": 57,
      "featured": false
    },
    {
      "short": "AIN",
      "title": "AIN: The Arabic INclusive Large Multimodal Model",
      "venue": "arXiv 2025",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Bilingual Arabic-English large multimodal model that surpasses GPT-4o on the CAMEL-Bench Arabic benchmark.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2502.00094",
        "github": "https://github.com/mbzuai-oryx/AIN",
        "project": "https://mbzuai-oryx.github.io/AIN/"
      },
      "stars": 55,
      "featured": false
    },
    {
      "short": "TerraFM",
      "title": "TerraFM: A Scalable Foundation Model for Unified Multisensor Earth Observation",
      "venue": "ICLR 2026",
      "year": 2026,
      "theme": "earth",
      "profs": [
        "salman",
        "fahad",
        "rao"
      ],
      "desc": "Self-supervised foundation model unifying Sentinel-1 radar and Sentinel-2 optical imagery for Earth observation.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2506.06281",
        "github": "https://github.com/mbzuai-oryx/TerraFM"
      },
      "stars": 52,
      "featured": false
    },
    {
      "short": "CVRR-ES",
      "title": "How Good is my Video LMM? Complex Video Reasoning and Robustness Evaluation Suite for Video-LMMs",
      "venue": "CVPR 2025 Workshops (MMFM)",
      "year": 2025,
      "theme": "video",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Benchmark across 11 real-world video dimensions probing complex reasoning and robustness of video LMMs.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2405.03690",
        "github": "https://github.com/mbzuai-oryx/CVRR-Evaluation-Suite",
        "project": "https://mbzuai-oryx.github.io/CVRR-Evaluation-Suite/"
      },
      "stars": 50,
      "featured": false
    },
    {
      "short": "ALM-Bench",
      "title": "All Languages Matter: Evaluating LMMs on Culturally Diverse 100 Languages",
      "venue": "CVPR 2025 (Highlight)",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Culturally diverse multilingual multimodal benchmark evaluating LMMs across 100 languages.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2411.16508",
        "github": "https://github.com/mbzuai-oryx/ALM-Bench",
        "project": "https://mbzuai-oryx.github.io/ALM-Bench/"
      },
      "stars": 48,
      "featured": false
    },
    {
      "short": "CAMEL-Bench",
      "title": "CAMEL-Bench: A Comprehensive Arabic LMM Benchmark",
      "venue": "NAACL 2025 (Findings)",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "rao"
      ],
      "desc": "Arabic multimodal benchmark of about 29K questions across 8 domains and 38 sub-domains.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2410.18976",
        "github": "https://github.com/mbzuai-oryx/Camel-Bench",
        "project": "https://mbzuai-oryx.github.io/Camel-Bench/"
      },
      "stars": 38,
      "featured": false
    },
    {
      "short": "CIFC",
      "title": "How to Continually Adapt Text-to-Image Diffusion Models for Flexible Customization?",
      "venue": "NeurIPS 2024",
      "year": 2024,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Continual customization of text-to-image diffusion models to learn new concepts without forgetting earlier ones.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2410.17594",
        "github": "https://github.com/JiahuaDong/CIFC"
      },
      "stars": 36,
      "featured": false
    },
    {
      "short": "BiMediX",
      "title": "BiMediX: Bilingual Medical Mixture of Experts LLM",
      "venue": "EMNLP 2024 (Findings)",
      "year": 2024,
      "theme": "medical",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "First bilingual English-Arabic medical mixture-of-experts LLM, supporting multiple-choice and open-ended medical dialogue.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2402.13253",
        "github": "https://github.com/mbzuai-oryx/BiMediX"
      },
      "stars": 33,
      "featured": false
    },
    {
      "short": "EvoLMM",
      "title": "EvoLMM: Self-Evolving Large Multimodal Models with Continuous Rewards",
      "venue": "arXiv 2025",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Self-evolving framework where a proposer and solver from one backbone improve multimodal reasoning using only raw images and consistency rewards.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2511.16672",
        "github": "https://github.com/mbzuai-oryx/EvoLMM",
        "project": "https://mbzuai-oryx.github.io/EvoLMM/"
      },
      "stars": 29,
      "featured": false
    },
    {
      "short": "Robust-LLaVA",
      "title": "Robust-LLaVA: On the Effectiveness of Large-Scale Robust Image Encoders for Multi-modal Large Language Models",
      "venue": "ICCV 2025 Workshop (Trustworthy FMs)",
      "year": 2025,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Shows that large-scale adversarially robust vision encoders make multimodal LLMs resilient to adversarial and jailbreak attacks.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2502.01576",
        "github": "https://github.com/HashmatShadab/Robust-LLaVA",
        "project": "https://hashmatshadab.github.io/Robust-LLaVA/"
      },
      "stars": 28,
      "featured": false
    },
    {
      "short": "Ground3D-LMM",
      "title": "Ground3D-LMM: Fine-Grained 3D Point Grounding and Spatial Reasoning with LMM",
      "venue": "ECCV 2026",
      "year": 2026,
      "theme": "perception",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "3D large multimodal model for fine-grained point-level grounding and spatial reasoning in 3D scenes.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2607.05493",
        "github": "https://github.com/AmolHarsh/ground3d-lmm",
        "project": "https://amolharsh.github.io/ground3d-lmm/"
      },
      "stars": 27,
      "featured": false
    },
    {
      "short": "LongShOT",
      "title": "A Benchmark for Omni-Modal Reasoning in Long Videos",
      "venue": "NeurIPS 2026",
      "year": 2026,
      "theme": "video",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "LongShOTBench and a training-free agent for reasoning over vision, speech and audio in long videos.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2512.16978",
        "github": "https://github.com/mbzuai-oryx/LongShOT",
        "project": "https://longshot.cvmbzuai.com/"
      },
      "stars": 26,
      "featured": false
    },
    {
      "short": "WorldGuide",
      "title": "WorldGuide: Goal-Directed Video World Model for Procedural Task Execution",
      "venue": "arXiv 2026",
      "year": 2026,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad",
        "hisham"
      ],
      "desc": "Goal-directed video world model that generates step-by-step visual guidance for executing procedural tasks.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2610.12459",
        "github": "https://github.com/mbzuai-oryx/WorldGuide",
        "project": "https://mbzuai-oryx.github.io/WorldGuide/"
      },
      "stars": 26,
      "featured": false
    },
    {
      "short": "VideoMathQA",
      "title": "VideoMathQA: Benchmarking Mathematical Reasoning via Multimodal Understanding in Videos",
      "venue": "ICLR 2026",
      "year": 2026,
      "theme": "video",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Benchmark testing mathematical reasoning that requires combining visual, spoken and textual cues across videos up to an hour long.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2506.05349",
        "github": "https://github.com/mbzuai-oryx/VideoMathQA",
        "project": "https://mbzuai-oryx.github.io/VideoMathQA/"
      },
      "stars": 25,
      "featured": false
    },
    {
      "short": "VISE",
      "title": "Paying More Attention to Visual Tokens in Self-Evolving Large Multimodal Models",
      "venue": "ECCV 2026",
      "year": 2026,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Visual-invariance self-evolution method that keeps self-improving multimodal models attending to visual tokens rather than language priors.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2606.27373",
        "github": "https://github.com/mbzuai-oryx/VISE",
        "project": "https://mbzuai-oryx.github.io/VISE/"
      },
      "stars": 20,
      "featured": false
    },
    {
      "short": "Video-R2",
      "title": "Video-R2: Reinforcing Consistent and Grounded Reasoning in Multimodal Language Models",
      "venue": "arXiv 2025",
      "year": 2025,
      "theme": "video",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Reinforcement-learning recipe with a temporal alignment reward that makes video reasoning consistent and grounded in visual evidence.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2511.23478",
        "github": "https://github.com/mbzuai-oryx/Video-R2",
        "project": "https://huggingface.co/collections/MBZUAI/video-r2"
      },
      "stars": 19,
      "featured": false
    },
    {
      "short": "TimeTravel",
      "title": "Time Travel: A Comprehensive Benchmark to Evaluate LMMs on Historical and Cultural Artifacts",
      "venue": "ACL 2025 (Findings)",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Expert-verified benchmark of 10K samples testing LMM understanding of historical and cultural artifacts from 266 cultures.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2502.14865",
        "github": "https://github.com/mbzuai-oryx/TimeTravel",
        "project": "https://mbzuai-oryx.github.io/TimeTravel/"
      },
      "stars": 19,
      "featured": false
    },
    {
      "short": "HSAT",
      "title": "Hierarchical Self-Supervised Adversarial Training for Robust Vision Models in Histopathology",
      "venue": "MICCAI 2025",
      "year": 2025,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Hierarchical self-supervised adversarial training that markedly improves robustness of histopathology vision models.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2503.10629",
        "github": "https://github.com/HashmatShadab/HSAT",
        "project": "https://hashmatshadab.github.io/HSAT/"
      },
      "stars": 12,
      "featured": false
    },
    {
      "short": "DEFT",
      "title": "DEFT: Decompositional Efficient Fine-Tuning for Text-to-Image Models",
      "venue": "NeurIPS 2025",
      "year": 2025,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Parameter-efficient fine-tuning method that decomposes weight updates to personalise and adapt text-to-image models.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2509.22793",
        "github": "https://github.com/MAXNORM8650/DEFT"
      },
      "stars": 11,
      "featured": false
    },
    {
      "short": "Fann or Flop",
      "title": "Fann or Flop: A Multigenre, Multiera Benchmark for Arabic Poetry Understanding in LLMs",
      "venue": "EMNLP 2025",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "hisham",
        "rao"
      ],
      "desc": "Benchmark evaluating LLM understanding of Arabic poetry across genres and historical eras.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2505.18152",
        "github": "https://github.com/mbzuai-oryx/FannOrFlop",
        "project": "https://mbzuai-oryx.github.io/FannOrFlop/"
      },
      "stars": 6,
      "featured": false
    },
    {
      "short": "Ask-Solve-Generate",
      "title": "Ask, Solve, Generate: Self-Evolving Unified Multimodal Understanding and Generation via Self-Consistency Rewards",
      "venue": "arXiv 2026",
      "year": 2026,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Self-evolving training for unified models that improves both multimodal understanding and image generation with self-consistency rewards.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2606.27376",
        "github": "https://github.com/mbzuai-oryx/Ask-Solve-Generate",
        "project": "https://mbzuai-oryx.github.io/Ask-Solve-Generate/"
      },
      "stars": 6,
      "featured": false
    },
    {
      "short": "MedROV",
      "title": "MedROV: Towards Real-Time Open-Vocabulary Detection Across Diverse Medical Imaging Modalities",
      "venue": "arXiv 2025",
      "year": 2025,
      "theme": "perception",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Real-time open-vocabulary object detector for diverse medical imaging modalities.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2511.20650",
        "github": "https://github.com/toobatehreem/MedROV"
      },
      "stars": 6,
      "featured": false
    },
    {
      "short": "FoMER-Bench",
      "title": "How Good are Foundation Models in Step-by-Step Embodied Reasoning?",
      "venue": "arXiv 2025",
      "year": 2025,
      "theme": "perception",
      "profs": [
        "salman",
        "fahad",
        "hisham",
        "rao"
      ],
      "desc": "Benchmark evaluating step-by-step embodied reasoning of foundation models across robot types and tasks.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2509.15293",
        "github": "https://github.com/mbzuai-oryx/FoMER-Bench",
        "project": "https://mbzuai-oryx.github.io/FoMER-Bench/"
      },
      "stars": 3,
      "featured": false
    },
    {
      "short": "ViMUL",
      "title": "A Culturally-diverse Multilingual Multimodal Video Benchmark & Model",
      "venue": "EMNLP 2025",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman",
        "fahad",
        "hisham"
      ],
      "desc": "ViMUL-Bench evaluates video LMMs in 14 languages across cultural categories, alongside the multilingual ViMUL video model.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2506.07032",
        "project": "https://mbzuai-oryx.github.io/ViMUL/"
      },
      "stars": null,
      "featured": false
    },
    {
      "short": "VSSM Robustness",
      "title": "Towards Evaluating the Robustness of Visual State Space Models",
      "venue": "CVPR 2025 Workshop (AdvML)",
      "year": 2025,
      "theme": "trust",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Systematic study of the robustness of Mamba-based visual state space models to corruptions and adversarial attacks.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2406.09407"
      },
      "stars": null,
      "featured": false
    },
    {
      "short": "Video-CoM",
      "title": "Video-CoM: Interactive Video Reasoning via Chain of Manipulations",
      "venue": "arXiv 2025",
      "year": 2025,
      "theme": "video",
      "profs": [
        "salman",
        "fahad"
      ],
      "desc": "Video reasoning model that actively manipulates the video (e.g. zooming and seeking) in a chain of steps to gather visual evidence before answering.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2511.23477",
        "github": "https://github.com/mbzuai-oryx/Video-CoM"
      },
      "stars": 23,
      "featured": false
    },
    {
      "short": "Perception Encoder",
      "title": "Perception Encoder: The best visual embeddings are not at the output of the network",
      "venue": "arXiv 2025",
      "year": 2025,
      "theme": "mm",
      "profs": [],
      "desc": "Vision encoder trained with contrastive vision-language learning whose intermediate layers give state-of-the-art features for classification, retrieval, language and dense prediction tasks.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2504.13181",
        "github": "https://github.com/facebookresearch/perception_models"
      },
      "stars": 2398,
      "featured": false
    },
    {
      "short": "PerceptionLM",
      "title": "PerceptionLM: Open-Access Data and Models for Detailed Visual Understanding",
      "venue": "NeurIPS",
      "year": 2025,
      "theme": "mm",
      "profs": [
        "salman"
      ],
      "desc": "Fully open perception language model and large-scale human-annotated video data for detailed image and video understanding.",
      "links": {
        "arxiv": "https://arxiv.org/abs/2504.13180",
        "github": "https://github.com/facebookresearch/perception_models"
      },
      "stars": 2398,
      "featured": false
    }
  ],
  "news": [
    {
      "date": "2026-06",
      "text": "ThinkGeo wins Best Paper at the MONTI workshop at CVPR 2026.",
      "url": "https://mbzuai.ac.ae/study/faculty/salman-khan/"
    },
    {
      "date": "2026-06",
      "text": "OpenEarthAgent, VISE and Ground3D-LMM accepted at ECCV 2026.",
      "url": "https://arxiv.org/abs/2606.27373"
    },
    {
      "date": "2026-03",
      "text": "MediX-R1 released: open-ended medical RL model that outperforms models three times its size on clinical benchmarks.",
      "url": "https://www.middleeastainews.com/p/mbzuai-advances-medical-ai-models"
    },
    {
      "date": "2026-01",
      "text": "Agent-X, VideoMathQA and TerraFM accepted at ICLR 2026.",
      "url": "https://github.com/mbzuai-oryx/Agent-X"
    },
    {
      "date": "2025-11",
      "text": "Salman Khan named a Clarivate Highly Cited Researcher (2025).",
      "url": "https://mbzuai.ac.ae/study/faculty/salman-khan/"
    },
    {
      "date": "2025-10",
      "text": "Salman Khan receives MBZUAI's Distinguished Research Award for multimodal models for Earth observation.",
      "url": "https://mbzuai.ac.ae/news/mbzuai-celebrates-faculty-excellence-at-annual-recognition-reception/"
    },
    {
      "date": "2025-10",
      "text": "PhD student Muhammad Maaz (advisor Salman Khan) named a 2025 Google PhD Fellow in Machine Perception, a first for the Gulf region.",
      "url": "https://mbzuai.ac.ae/news/mbzuais-muhammad-maaz-named-google-ph-d-fellow-a-first-for-the-gulf/"
    },
    {
      "date": "2025-08",
      "text": "Fann or Flop accepted to the EMNLP 2025 main conference.",
      "url": "https://github.com/mbzuai-oryx/FannOrFlop"
    },
    {
      "date": "2025-06",
      "text": "EarthDial, a conversational model for multi-sensory Earth observation, presented at CVPR 2025.",
      "url": "https://www.middleeastainews.com/p/mbzuai-breakthrough-vlm-at-cvpr-2025"
    },
    {
      "date": "2025-05",
      "text": "GeoPixel accepted at ICML 2025.",
      "url": "https://github.com/mbzuai-oryx/GeoPixel"
    },
    {
      "date": "2025-05",
      "text": "LlamaV-o1, KITAB-Bench, TimeTravel and LLMVoX accepted to ACL 2025 (Findings).",
      "url": "https://github.com/mbzuai-oryx/LlamaV-o1"
    },
    {
      "date": "2025-02",
      "text": "ALM-Bench accepted at CVPR 2025 and selected as a Highlight paper; VideoGLaMM also accepted at CVPR 2025.",
      "url": "https://github.com/mbzuai-oryx/ALM-Bench"
    },
    {
      "date": "2024-08",
      "text": "PALO accepted at WACV 2025 as an oral presentation.",
      "url": "https://github.com/mbzuai-oryx/PALO"
    },
    {
      "date": "2024-05",
      "text": "Video-ChatGPT accepted to ACL 2024 (main conference).",
      "url": "https://github.com/mbzuai-oryx/Video-ChatGPT"
    },
    {
      "date": "2024-03",
      "text": "MBZUAI launches five new models from the group: BiMediX, PALO, GLaMM, GeoChat and MobiLlama.",
      "url": "https://www.zawya.com/en/business/technology-and-telecom/mbzuai-launches-5-new-first-of-its-kind-specialised-language-and-multimodal-models-hjmhx37w"
    }
  ],
  "starsTotal": 14390,
  "team": [
    {
      "name": "Abdelrahman Shaker",
      "role": "PD",
      "photo": "assets/img/team/abdelrahman-shaker.jpg",
      "links": {
        "scholar": "https://scholar.google.com/citations?user=eEz4Wu4AAAAJ",
        "homepage": "https://amshaker.github.io/"
      }
    },
    {
      "name": "Hanoona Bangalath",
      "role": "PD",
      "photo": "assets/img/team/hanoona-bangalath.jpg",
      "links": {
        "scholar": "https://scholar.google.com/citations?user=yhDdEuEAAAAJ",
        "homepage": "https://www.hanoonarasheed.com/"
      }
    },
    {
      "name": "Akhtar Munir",
      "role": "RS",
      "photo": "assets/img/team/akhtar-munir.jpg",
      "links": {
        "scholar": "https://scholar.google.com/citations?user=sT-epZAAAAAJ",
        "homepage": null
      }
    },
    {
      "name": "Jean Lahoud",
      "role": "RS",
      "photo": "assets/img/team/jean-lahoud.jpg",
      "links": {
        "scholar": "https://scholar.google.com/citations?user=LsivLPoAAAAJ",
        "homepage": null
      }
    },
    {
      "name": "Chao Qin",
      "role": "PD",
      "photo": null,
      "links": {
        "scholar": null,
        "homepage": null
      }
    },
    {
      "name": "Jiahua Dong",
      "role": "PD",
      "photo": null,
      "links": {
        "scholar": "https://scholar.google.com/citations?user=xrXqa8AAAAAJ",
        "homepage": null
      }
    },
    {
      "name": "Jiaqi Ma",
      "role": "PD",
      "photo": null,
      "links": {
        "scholar": "https://scholar.google.com/citations?user=BJUlpoMAAAAJ",
        "homepage": "https://leonmakise.github.io/"
      }
    },
    {
      "name": "Mingfei Han",
      "role": "PD",
      "photo": "assets/img/team/mingfei-han.jpg",
      "links": {
        "scholar": "https://scholar.google.com/citations?user=wJEoIXsAAAAJ",
        "homepage": "https://mingfei.info/"
      }
    },
    {
      "name": "Mubashir Noman",
      "role": "PD",
      "photo": "assets/img/team/mubashir-noman.jpg",
      "links": {
        "scholar": "https://scholar.google.com/citations?user=S6_CVskAAAAJ",
        "homepage": null
      }
    },
    {
      "name": "Shiming Chen",
      "role": "PD",
      "photo": "assets/img/team/shiming-chen.jpg",
      "links": {
        "scholar": "https://scholar.google.com/citations?user=botczdcAAAAJ",
        "homepage": "https://shiming-chen.github.io/"
      }
    },
    {
      "name": "Zaigham Zaheer",
      "role": "RS",
      "photo": "assets/img/team/zaigham-zaheer.jpg",
      "links": {
        "scholar": "https://scholar.google.com/citations?user=nFxWrXEAAAAJ",
        "homepage": "https://zaighamz.github.io/"
      }
    },
    {
      "name": "Zongyan Han",
      "role": "PD",
      "photo": "assets/img/team/zongyan-han.jpg",
      "links": {
        "scholar": "https://scholar.google.com/citations?user=rL9CaNwAAAAJ",
        "homepage": "https://hanzy1996.github.io/"
      }
    }
  ]
};
