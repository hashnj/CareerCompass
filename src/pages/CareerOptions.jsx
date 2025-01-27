// import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";


const CareerOptions = () => {
    const options = [
      {
        "isHeading": true,
        "title": "A",
        "link": null
      },
      {
        "isHeading": false,
        "title": "Accounting apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/z7wb2sg"
      },
      {
        "isHeading": false,
        "title": "Actor",
        "link": "https://www.bbc.co.uk/bitesize/articles/z6yg2sg"
      },
      {
        "isHeading": false,
        "title": "Business administration apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4xshcw"
      },
      {
        "isHeading": false,
        "title": "School administrator",
        "link": "https://www.bbc.co.uk/bitesize/articles/zxv4g7h"
      },
      {
        "isHeading": false,
        "title": "Financial advisor",
        "link": "https://www.bbc.co.uk/bitesize/articles/zr4np4j"
      },
      {
        "isHeading": false,
        "title": "Aerospace engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfkhp4j"
      },
      {
        "isHeading": false,
        "title": "Air ambulance doctor",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfxrcmn"
      },
      {
        "isHeading": false,
        "title": "Air ambulance pilot",
        "link": "https://www.bbc.co.uk/bitesize/articles/z6y2bdm"
      },
      {
        "isHeading": false,
        "title": "Aircraft engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfswy9q"
      },
      {
        "isHeading": false,
        "title": "Alpine ski racer",
        "link": "https://www.bbc.co.uk/bitesize/articles/znj9scw"
      },
      {
        "isHeading": false,
        "title": "Ambulance dispatcher",
        "link": "https://www.bbc.co.uk/bitesize/articles/zh3292p"
      },
      {
        "isHeading": false,
        "title": "Trainee business analyst",
        "link": "https://www.bbc.co.uk/bitesize/articles/znbgpg8"
      },
      {
        "isHeading": false,
        "title": "App developer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zrhpwty"
      },
      {
        "isHeading": false,
        "title": "App co-owner (fitness app)",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbskpg8"
      },
      {
        "isHeading": false,
        "title": "A&R (artist & repertoire)",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfkhp4j"
      },
      {
        "isHeading": false,
        "title": "Architectural assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmvmkmn"
      },
    
      // {
      //   "isHeading": true,
      //   "title": "A-D",
      //   "link": null
      // },
      // {
      //   "isHeading": false,
      //   "title": "Accounting apprentice",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/z7wb2sg"
      // },
      // {
      //   "isHeading": false,
      //   "title": "Actor",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/z6yg2sg"
      // },
      // {
      //   "isHeading": false,
      //   "title": "Business administration apprentice",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/z4xshcw"
      // },
      // {
      //   "isHeading": false,
      //   "title": "School administrator",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/zxv4g7h"
      // },
      // {
      //   "isHeading": false,
      //   "title": "Financial advisor",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/zr4np4j"
      // },
      // {
      //   "isHeading": false,
      //   "title": "Aerospace engineer",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/zfkhp4j"
      // },
      // {
      //   "isHeading": false,
      //   "title": "Air ambulance doctor",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/zfxrcmn"
      // },
      // {
      //   "isHeading": false,
      //   "title": "Air ambulance pilot",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/z6y2bdm"
      // },
      // {
      //   "isHeading": false,
      //   "title": "Aircraft engineer",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/zfswy9q"
      // },
      // {
      //   "isHeading": false,
      //   "title": "Alpine ski racer",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/znj9scw"
      // },
      // {
      //   "isHeading": false,
      //   "title": "Ambulance dispatcher",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/zh3292p"
      // },
      // {
      //   "isHeading": false,
      //   "title": "Trainee business analyst",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/znbgpg8"
      // },
      // {
      //   "isHeading": false,
      //   "title": "App developer",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/zrhpwty"
      // },
      // {
      //   "isHeading": false,
      //   "title": "App co-owner (fitness app)",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/zbskpg8"
      // },
      // {
      //   "isHeading": false,
      //   "title": "A&R (artist & repertoire)",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/zfkhp4j"
      // },
      // {
      //   "isHeading": false,
      //   "title": "Architectural assistant",
      //   "link": "https://www.bbc.co.uk/bitesize/articles/zmvmkmn"
      // },
      {
        "isHeading": false,
        "title": "Architect",
        "link": "https://www.bbc.co.uk/bitesize/articles/z74hkmn"
      },
      {
        "isHeading": false,
        "title": "Concept artist",
        "link": "https://www.bbc.co.uk/bitesize/articles/zhgn92p"
      },
      {
        "isHeading": false,
        "title": "Art director",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmywjsg"
      },
      {
        "isHeading": false,
        "title": "Art historian",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfkhp4j"
      },
      {
        "isHeading": false,
        "title": "Back of house (Kitchen) assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/znmr6v4"
      },
      {
        "isHeading": false,
        "title": "Kitchen assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/z7thd6f"
      },
      {
        "isHeading": false,
        "title": "Assistant learning officer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvwx92p"
      },
      {
        "isHeading": false,
        "title": "Assistant producer",
        "link": "https://www.bbc.co.uk/bitesize/articles/z48kgwx"
      },
      {
        "isHeading": false,
        "title": "Assistant producer, radio",
        "link": "https://www.bbc.co.uk/bitesize/articles/z998jsg"
      },
      {
        "isHeading": false,
        "title": "Media assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/zv26nk7"
      },
      {
        "isHeading": false,
        "title": "Restaurant assistant manager",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbyt8xs"
      },
      {
        "isHeading": true,
        "title": "B",
        "link": null
      },
      {
        "isHeading": false,
        "title": "Barista",
        "link": "https://www.bbc.co.uk/bitesize/articles/z2f3cxs"
      },
      {
        "isHeading": false,
        "title": "Barrister",
        "link": "https://www.bbc.co.uk/bitesize/articles/zncdvk7"
      },
      {
        "isHeading": false,
        "title": "Beekeeper",
        "link": "https://www.bbc.co.uk/bitesize/articles/zkj2rj6"
      },
      {
        "isHeading": false,
        "title": "Biomedical scientist",
        "link": "https://www.bbc.co.uk/bitesize/articles/zj6s6v4"
      },
      {
        "isHeading": false,
        "title": "Bird of prey specialist",
        "link": "https://www.bbc.co.uk/bitesize/articles/zr8qkmn"
      },
      {
        "isHeading": false,
        "title": "Broadcast assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbg4scw"
      },
      {
        "isHeading": false,
        "title": "Festival build manager",
        "link": "https://www.bbc.co.uk/bitesize/articles/z2sp6g8"
      },
      {
        "isHeading": false,
        "title": "Business owner: in advertising",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjxmqfr"
      },
      {
        "isHeading": false,
        "title": "Business owner: in a car valeting business",
        "link": "https://www.bbc.co.uk/bitesize/articles/z7fjjhv"
      },
      {
        "isHeading": false,
        "title": "Business owner: in a cake designer business",
        "link": "https://www.bbc.co.uk/bitesize/articles/zv6jbdm"
      },
      {
        "isHeading": false,
        "title": "Business owner: in a digital app business",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvnmgwx"
      },
      {
        "isHeading": false,
        "title": "Business owner: in an engineering business",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvvchbk"
      },
      {
        "isHeading": false,
        "title": "Business development intern",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfp792p"
      },
      {
        "isHeading": true,
        "title": "C",
        "link": null
      },
      {
        "isHeading": false,
        "title": "Cabin crew",
        "link": "https://www.bbc.co.uk/bitesize/articles/z2vg9ty"
      },
      {
        "isHeading": false,
        "title": "Cake designer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zk3gmfr"
      },
      {
        "isHeading": false,
        "title": "Camera assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/zj6mgwx"
      },
      {
        "isHeading": false,
        "title": "Camera trainee",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvmjbdm"
      },
      {
        "isHeading": false,
        "title": "Cardiac coach",
        "link": "https://www.bbc.co.uk/bitesize/articles/z9nkkty"
      },
      {
        "isHeading": false,
        "title": "Carer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbw692p"
      },
      {
        "isHeading": false,
        "title": "Carpentry",
        "link": "https://www.bbc.co.uk/bitesize/articles/zr3wy9q"
      },
      {
        "isHeading": false,
        "title": "Catchment officer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zk27382"
      },
      {
        "isHeading": false,
        "title": "CEO",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4vpd6f"
      },
      {
        "isHeading": false,
        "title": "Chef",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4r4t39"
      },
      {
        "isHeading": false,
        "title": "Chemist",
        "link": "https://www.bbc.co.uk/bitesize/articles/zhrxrj6"
      },
      {
        "isHeading": false,
        "title": "Chocolatier",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjmkpg8"
      },
      {
        "isHeading": false,
        "title": "Dancer and choreographer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zhrgmfr"
      },
      {
        "isHeading": false,
        "title": "Civil engineer technician",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbvgxyc"
      },
      {
        "isHeading": false,
        "title": "Civil engineering apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/z47b2sg"
      },
      {
        "isHeading": false,
        "title": "Cleaner",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfw76rd"
      },
      {
        "isHeading": false,
        "title": "Clinical photographer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvmjbdm"
      },
      {
        "isHeading": false,
        "title": "Rugby coach apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjdbqp3"
      },
      {
        "isHeading": false,
        "title": "Coastguard – maritime operations officer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zr4np4j"
      },
      {
        "isHeading": false,
        "title": "Coder",
        "link": "https://www.bbc.co.uk/bitesize/articles/zt43r2p"
      },
      {
        "isHeading": false,
        "title": "Coding events manager",
        "link": "https://www.bbc.co.uk/bitesize/articles/zkcsd6f"
      },
      {
        "isHeading": false,
        "title": "Collections officer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbn4hbk"
      },
      {
        "isHeading": false,
        "title": "Comedian",
        "link": "https://www.bbc.co.uk/bitesize/articles/zrk37nb"
      },
      {
        "isHeading": false,
        "title": "Commissioning and development executive",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbw692p"
      },
      {
        "isHeading": false,
        "title": "Community education coordinator",
        "link": "https://www.bbc.co.uk/bitesize/articles/zn3k4xs"
      },
      {
        "isHeading": false,
        "title": "Community cohesion officer",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4fq382"
      },
      {
        "isHeading": false,
        "title": "Community midwife",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjmct39"
      },
      {
        "isHeading": false,
        "title": "Composer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zf4dnrd"
      },
      {
        "isHeading": false,
        "title": "Conservation apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/zkw6cqt"
      },
      {
        "isHeading": false,
        "title": "Apprentice conservation officer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zdhhd6f"
      },
      {
        "isHeading": false,
        "title": "Conservation officer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zrbp47h"
      },
      {
        "isHeading": false,
        "title": "Conservation trainee",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvcf8xs"
      },
      {
        "isHeading": false,
        "title": "Construction manager",
        "link": "https://www.bbc.co.uk/bitesize/articles/zv48scw"
      },
      {
        "isHeading": false,
        "title": "Construction site engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zkcwy9q"
      },
      {
        "isHeading": false,
        "title": "Travel consultant",
        "link": "https://www.bbc.co.uk/bitesize/articles/zh6x92p"
      },
      {
        "isHeading": false,
        "title": "Senior content executive",
        "link": "https://www.bbc.co.uk/bitesize/articles/zrmxhcw"
      },
      {
        "isHeading": false,
        "title": "Contributor (digital platform)",
        "link": "https://www.bbc.co.uk/bitesize/articles/zhr9dp3"
      },
      {
        "isHeading": true,
        "title": "D",
        "link": null
      },
      {
        "isHeading": false,
        "title": "Dancer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmq3jhv"
      },
      {
        "isHeading": false,
        "title": "Dance choreographer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zrbp47h"
      },
      {
        "isHeading": false,
        "title": "Data and compliance manager",
        "link": "https://www.bbc.co.uk/bitesize/articles/z78td6f"
      },
      {
        "isHeading": false,
        "title": "Dental lab assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/z76x92p"
      },
      {
        "isHeading": false,
        "title": "Dental nurse",
        "link": "https://www.bbc.co.uk/bitesize/articles/zrpkwnb"
      },
      {
        "isHeading": false,
        "title": "Dental nurse assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvbct39"
      },
      {
        "isHeading": false,
        "title": "Associate development manager",
        "link": "https://www.bbc.co.uk/bitesize/articles/zkh496f"
      },
      {
        "isHeading": false,
        "title": "Costume designer for Fantastic Beasts",
        "link": "https://www.bbc.co.uk/bitesize/articles/zf4snrd"
      },
      {
        "isHeading": false,
        "title": "Electrical design engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zb7bbqt"
      },
      {
        "isHeading": false,
        "title": "Handbag designer",
        "link": "https://www.bbc.co.uk/bitesize/articles/znr9nrd"
      },
      {
        "isHeading": false,
        "title": "Jewellery designer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmdfhbk"
      },
      {
        "isHeading": false,
        "title": "Apprentice wing designer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjq3jhv"
      },
      {
        "isHeading": false,
        "title": "Garden designer",
        "link": "https://www.bbc.co.uk/bitesize/articles/z7nddp3"
      },
      {
        "isHeading": false,
        "title": "Graphic designer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbccvk7"
      },
      {
        "isHeading": false,
        "title": "User experience designer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zm2rvk7"
      },
      {
        "isHeading": false,
        "title": "App developer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zhgn92p"
      },
      {
        "isHeading": false,
        "title": "Software developer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zb9nd6f"
      },
      {
        "isHeading": false,
        "title": "Development assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4vpd6f"
      },
      {
        "isHeading": false,
        "title": "Development officer",
        "link": "https://www.bbc.co.uk/bitesize/articles/z7jckty"
      },
      {
        "isHeading": false,
        "title": "Dietitian",
        "link": "https://www.bbc.co.uk/bitesize/articles/zf4y2sg"
      },
      {
        "isHeading": false,
        "title": "Head of digital and short form",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbtsjhv"
      },
      {
        "isHeading": false,
        "title": "Digital degree apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfdsd6f"
      },
      {
        "isHeading": false,
        "title": "Digital engagement apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvrv7nb"
      },
      {
        "isHeading": false,
        "title": "Digital content producer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zf4bmfr"
      },
      {
        "isHeading": false,
        "title": "Digital marketing apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/z6796v4"
      },
      {
        "isHeading": false,
        "title": "Digital marketing exec",
        "link": "https://www.bbc.co.uk/bitesize/articles/z2vg9ty"
      },
      {
        "isHeading": false,
        "title": "Digital transformation lead (project manager)",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbddcqt"
      },
      {
        "isHeading": false,
        "title": "Director in fashion wholesale",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfwnjhv"
      },
      {
        "isHeading": false,
        "title": "Director in photography",
        "link": "https://www.bbc.co.uk/bitesize/articles/zd62bdm"
      },
      {
        "isHeading": false,
        "title": "Director for sports TV",
        "link": "https://www.bbc.co.uk/bitesize/articles/zn7chbk"
      },
      {
        "isHeading": false,
        "title": "Director at a gaming company",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvp7y9q"
      },
      {
        "isHeading": false,
        "title": "Studio director",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmvgscw"
      },
      {
        "isHeading": false,
        "title": "Ambulance dispatcher",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4thd6f"
      },
      {
        "isHeading": false,
        "title": "Emergency medical dispatcher: call taker",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjgpwty"
      },
      {
        "isHeading": false,
        "title": "DJ and presenter",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbt8scw"
      },
      {
        "isHeading": false,
        "title": "DJ producer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zk87wnb"
      },
      {
        "isHeading": false,
        "title": "Accident and emergency doctor",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmpmgwx"
      },
      {
        "isHeading": false,
        "title": "Air ambulance doctor",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfswy9q"
      },
      {
        "isHeading": false,
        "title": "Drama facilitator",
        "link": "https://www.bbc.co.uk/bitesize/articles/zkwrt39"
      },
      {
        "isHeading": false,
        "title": "Festival programme director",
        "link": "https://www.bbc.co.uk/bitesize/articles/zd3fg2p"
      },
      {
        "isHeading": false,
        "title": "Drone operator",
        "link": "https://www.bbc.co.uk/bitesize/articles/z6n3mfr"
      },
      {
        "isHeading": false,
        "title": "Drummer for Kylie",
        "link": "https://www.bbc.co.uk/bitesize/articles/z9vbr2p#zry3g7h1"
      },
      {
        "isHeading": true,
        "title": "E-H",
        "link": null
      },
      {
        "isHeading": false,
        "title": "Civil engineering apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/zh3292p"
      },
      {
        "isHeading": false,
        "title": "Civil engineering technician",
        "link": "https://www.bbc.co.uk/bitesize/articles/z47rxyc"
      },
      {
        "isHeading": false,
        "title": "Digital engagement apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmvgscw"
      },
      {
        "isHeading": false,
        "title": "Ecologist",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4nq8xs"
      },
      {
        "isHeading": false,
        "title": "Editor",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4w6qp3"
      },
      {
        "isHeading": false,
        "title": "Content editor",
        "link": "https://www.bbc.co.uk/bitesize/articles/zv48scw"
      },
      {
        "isHeading": false,
        "title": "Educational support officer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvcf8xs"
      },
      {
        "isHeading": false,
        "title": "Educational wellbeing specialist",
        "link": "https://www.bbc.co.uk/bitesize/articles/zj6s6v4"
      },
      {
        "isHeading": false,
        "title": "Electrician",
        "link": "https://www.bbc.co.uk/bitesize/articles/zdnw382"
      },
      {
        "isHeading": false,
        "title": "Emergency medical dispatcher: call taker",
        "link": "https://www.bbc.co.uk/bitesize/articles/zhp9y9q"
      },
      {
        "isHeading": false,
        "title": "Emergency medical technician",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjmcscw"
      },
      {
        "isHeading": false,
        "title": "Acoustic engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zkh496f"
      },
      {
        "isHeading": false,
        "title": "Aerospace engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/znj9scw"
      },
      {
        "isHeading": false,
        "title": "Aircraft engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zrhpwty"
      },
      {
        "isHeading": false,
        "title": "Audio engineer and musician",
        "link": "https://www.bbc.co.uk/bitesize/articles/zncdvk7"
      },
      {
        "isHeading": false,
        "title": "Electrical design engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zb7bbqt"
      },
      {
        "isHeading": false,
        "title": "Junior simulation engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zv8bqp3"
      },
      {
        "isHeading": false,
        "title": "Sound engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4jn2sg"
      },
      {
        "isHeading": false,
        "title": "Tendering engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfs9nrd"
      },
      {
        "isHeading": false,
        "title": "Construction site engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/z6796v4"
      },
      {
        "isHeading": false,
        "title": "Electrical engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvqyqp3"
      },
      {
        "isHeading": false,
        "title": "Engineering apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/zrwqy9q"
      },
      {
        "isHeading": false,
        "title": "Engineering technician",
        "link": "https://www.bbc.co.uk/bitesize/articles/zv9wy9q"
      },
      {
        "isHeading": false,
        "title": "Electrical engineer apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/zb29nrd"
      },
      {
        "isHeading": false,
        "title": "Apprentice engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjw7bdm"
      },
      {
        "isHeading": false,
        "title": "Formula 1 engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvk3jhv"
      },
      {
        "isHeading": false,
        "title": "Senior system engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zv68cqt"
      },
      {
        "isHeading": false,
        "title": "Structural engineer",
        "link": "https://www.bbc.co.uk/bitesize/articles/ztt44xs"
      },
      {
        "isHeading": false,
        "title": "Entrepreneur: clothing manufacturer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfwnjhv"
      },
      {
        "isHeading": false,
        "title": "Ergonomist",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmywjsg"
      },
      {
        "isHeading": false,
        "title": "Estate agent",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjyy2sg"
      },
      {
        "isHeading": false,
        "title": "Events assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/zr8qkmn"
      },
      {
        "isHeading": false,
        "title": "Coding events manager",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmgmgwx"
      },
      {
        "isHeading": false,
        "title": "Events curator",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4h996f"
      },
      {
        "isHeading": false,
        "title": "Executive assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/z49bmfr"
      },
      {
        "isHeading": false,
        "title": "Senior content executive",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbddcqt"
      },
      {
        "isHeading": true,
        "title": "F",
        "link": null
      },
      {
        "isHeading": false,
        "title": "Farmer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zf2mgwx"
      },
      {
        "isHeading": false,
        "title": "Farming union policy advisor",
        "link": "https://www.bbc.co.uk/bitesize/articles/zd62bdm"
      },
      {
        "isHeading": false,
        "title": "Farrier",
        "link": "https://www.bbc.co.uk/bitesize/articles/zn7chbk"
      },
      {
        "isHeading": false,
        "title": "Fashion designer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvp7y9q"
      },
      {
        "isHeading": false,
        "title": "Festival programme director",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmvgscw"
      },
      {
        "isHeading": false,
        "title": "Field technician",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4thd6f"
      },
      {
        "isHeading": false,
        "title": "Film director",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjgpwty"
      },
      {
        "isHeading": false,
        "title": "Freelance filmmaker",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbt8scw"
      },
      {
        "isHeading": false,
        "title": "Filmmaker, sports",
        "link": "https://www.bbc.co.uk/bitesize/articles/zk87wnb"
      },
      {
        "isHeading": false,
        "title": "Filmmaker and vlogger",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmpmgwx"
      },
      {
        "isHeading": false,
        "title": "Financial advisor",
        "link": "https://www.bbc.co.uk/bitesize/articles/zfswy9q"
      },
      {
        "isHeading": false,
        "title": "Financial service administrator",
        "link": "https://www.bbc.co.uk/bitesize/articles/zkwrt39"
      },
      {
        "isHeading": false,
        "title": "Firefighter apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/zd3fg2p"
      },
      {
        "isHeading": false,
        "title": "Firefighter in London",
        "link": "https://www.bbc.co.uk/bitesize/articles/z6n3mfr"
      },
      {
        "isHeading": false,
        "title": "Firefighter in Nottingham",
        "link": "https://www.bbc.co.uk/bitesize/articles/z9vbr2p#zry3g7h1"
      },
      {
        "isHeading": false,
        "title": "Firefighter in Wales",
        "link": "https://www.bbc.co.uk/bitesize/articles/zdrv7nb"
      },
      {
        "isHeading": false,
        "title": "Florist",
        "link": "https://www.bbc.co.uk/bitesize/articles/zk27382"
      },
      {
        "isHeading": false,
        "title": "Foley artist",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4xshcw"
      },
      {
        "isHeading": false,
        "title": "Chef and food vlogger",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4fq382"
      },
      {
        "isHeading": false,
        "title": "Food and drink project planner",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjkbcmn#ztmdqfr5"
      },
      {
        "isHeading": false,
        "title": "Football coach – Bryan",
        "link": "https://www.bbc.co.uk/bitesize/articles/zvp7y9q"
      },
      {
        "isHeading": false,
        "title": "Football coach – Renee",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmvgscw"
      },
      {
        "isHeading": false,
        "title": "Front of house usher",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4thd6f"
      },
      {
        "isHeading": true,
        "title": "G",
        "link": null
      },
      {
        "isHeading": false,
        "title": "Games designer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zj2kt39"
      },
      {
        "isHeading": false,
        "title": "Gaming company director",
        "link": "https://www.bbc.co.uk/bitesize/articles/zkywf4j"
      },
      {
        "isHeading": false,
        "title": "Garden designer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbccvk7"
      },
      {
        "isHeading": false,
        "title": "Glass-maker",
        "link": "https://www.bbc.co.uk/bitesize/articles/zhf7qp3"
      },
      {
        "isHeading": false,
        "title": "Globemaker",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmyyhbk"
      },
      {
        "isHeading": false,
        "title": "Graphic designer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zj2kt39"
      },
      {
        "isHeading": false,
        "title": "Graphic designer on Harry Potter",
        "link": "https://www.bbc.co.uk/bitesize/articles/zkywf4j"
      },
      {
        "isHeading": false,
        "title": "Vlogger: graphic design",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbccvk7"
      },
      {
        "isHeading": false,
        "title": "Groundstaff",
        "link": "https://www.bbc.co.uk/bitesize/articles/zhf7qp3"
      },
      {
        "isHeading": false,
        "title": "Tour (tourist) guide",
        "link": "https://www.bbc.co.uk/bitesize/articles/zmyyhbk"
      },
      {
        "isHeading": true,
        "title": "H",
        "link": null
      },
      {
        "isHeading": false,
        "title": "Hairdresser: for people with additional needs",
        "link": "https://www.bbc.co.uk/bitesize/articles/z6m9hbk"
      },
      {
        "isHeading": false,
        "title": "Hairdresser apprentice",
        "link": "https://www.bbc.co.uk/bitesize/articles/z4rmrj6"
      },
      {
        "isHeading": false,
        "title": "Public health officer",
        "link": "https://www.bbc.co.uk/bitesize/articles/zrjckty"
      },
      {
        "isHeading": false,
        "title": "Healthcare assistant",
        "link": "https://www.bbc.co.uk/bitesize/articles/zbhc4xs#ztwnsk71"
      },
      {
        "isHeading": false,
        "title": "Newborn hearing screener",
        "link": "https://www.bbc.co.uk/bitesize/articles/zc2kwnb"
      },
      {
        "isHeading": false,
        "title": "Art historian",
        "link": "https://www.bbc.co.uk/bitesize/articles/znxw7yc"
      },
      {
        "isHeading": false,
        "title": "Horse riding instructor",
        "link": "https://www.bbc.co.uk/bitesize/articles/z998jsg"
      },
      {
        "isHeading": false,
        "title": "Hospital receptionist",
        "link": "https://www.bbc.co.uk/bitesize/articles/zdkxcqt"
      },
      {
        "isHeading": false,
        "title": "Humanitarian worker",
        "link": "https://www.bbc.co.uk/bitesize/articles/zjpmtrd"
      }
    ]


    const [searchQuery, setSearchQuery] = useState(''); 
    const [filteredOptions, setFilteredOptions] = useState(options);

    
    const handleSearch = () => {
      const results = options.filter((item) => {
        return (
          !item.isHeading && // Exclude headings
          item.title
            .toLowerCase()
            .split(' ')
            .some((word) => word.startsWith(searchQuery.toLowerCase()))
        );
      });
      setFilteredOptions(results);
    };
    
    // const nav = useNavigate();
        
    return (
      <div className="p-2 bg-backgrounds min-h-screen">
      <div>
        <h1 className="text-primary font-extrabold text-3xl p-2">Career Options</h1>
      </div>
      <div className="flex p-4">
        <input
          type="text"
          className="border-2 border-text/30 rounded-2xl focus:border-primary active:ring-0 text-2xl p-3 text-text  w-full bg-background/70"
          placeholder="Search Careers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input
        />
        <div 
          className="text-2xl p-4 bg-primary text-text m-1 mx-4 mr-6 rounded-full"
          onClick={handleSearch}
          >
          <FaSearch />
        </div>
      </div>
      <div className="flex flex-wrap p-4">
        {filteredOptions.map((item, index) => (
          item.isHeading ? (
            <div className="w-full" key={index}>
              <h2 className="text-2xl text-primary font-bold">{item.title}</h2>
            </div>
          ) : (
            <div className="p-2" key={index}>
              <div
                className="cursor-pointer bg-background shadow-sm shadow-text hover:shadow  rounded-md text-xl font-bold p-4 hover:bg-background/80 transition duration-300 text-text"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default CareerOptions