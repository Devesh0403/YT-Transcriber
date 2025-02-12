import React, { useState, useEffect } from 'react';
import Navbar from '/src/Navbar.tsx';




const SignUp = () => {
    const backgroundImages = [
        { id: 1, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698053/Zombies_vwgwnp.gif" },
        { id: 2, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698048/tumblr_om1h9bsPn41vjxiz1o1_540_gif_512_312_zyiknt.gif" },
        { id: 3, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698045/tumblr_ogr2nbDXq11rkmjxwo1_500_gif_500_270_r3kj2x.gif" },
        { id: 4, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698039/Tired_Now_hcrsda.gif" },
        { id: 5, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698037/Steam_Community____VA-11_Hall-A__Cyberpunk_Bartender_Action_aitjjo.gif" },
        { id: 6, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698029/Spirited_Away_gif_sb08sh.gif" },
        { id: 7, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698024/Smoking_Joe_s_xp1bwq.gif" },
        { id: 8, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698019/Sex_Lessons_aalimq.gif" },
        { id: 9, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698016/Robo_Trip_q69ucw.gif" },
        { id: 10, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698011/Pixel_Jeff_X_Divoom_kuzmt9.gif" },
        { id: 11, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698008/Night_Shift_Pixel_Jeff_bk7ucu.gif" },
        { id: 12, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727698003/%E1%B4%8D%E1%B4%80%C9%B4%E1%B4%85%CA%8F_%CA%99%E1%B4%9C%C9%B4%C9%B4%CA%8F_ylrsvo.gif" },
        { id: 13, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697999/Modern_bathroom_design_by_Cutiezor_on_DeviantArt_lkkwr1.gif" },
        { id: 14, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697995/In_the_shelves_pixel_art_vfzeue.gif" },
        { id: 15, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697987/Happy_rover_pqpbsd.gif" },
        { id: 16, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697979/Gamer_Room__Cyberpunk_ExceptRea_ewunud.gif" },
        { id: 17, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697971/gif_jbrhsm.gif" },
        { id: 18, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697958/dd12c41d-464d-48d0-b8dc-3eba590f4ae3_g3ea4v.gif" },
        { id: 19, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697955/Create_dynamic_edits_curate_your_gallery_and_immerse_yourself_in_inspiring_and_motivating_content__ynlfpu.gif" },
        { id: 20, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697944/Chill_of_the_Wild_fjrfmh.gif" },
        { id: 21, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697938/Chill_Mario_2023_ver__Pixel_Jeff_uhur73.gif" },
        { id: 22, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697933/c9d73577-e540-403e-8dcd-4eb9302d77a1_riqr97.gif" },
        { id: 23, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697931/APO___%E7%94%BB%E5%83%8F_srztlt.gif" },
        { id: 24, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697918/86e705d1-f73f-4f4d-a602-9be3b09573b0_jncxru.gif" },
        { id: 25, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697909/77af265e-ef54-4718-b154-5a9dbe7966fd_mnwob1.gif" },
        { id: 26, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697905/11_h0xgd2.gif" },
        { id: 27, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697903/9_sjiuag.gif" },
        { id: 28, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697901/8_ziinfx.gif" },
        { id: 29, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697893/7_r2pypm.gif" },
        { id: 30, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697891/photo_vassoula_mpsdme.gif" },
        { id: 31, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697887/__zlvnmn.gif" },
        { id: 32, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697884/__11_e5bt8k.gif" },
        { id: 33, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697876/__10_vsz6hp.gif" },
        { id: 34, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697865/__9_j5dh2x.gif" },
        { id: 35, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697861/__8_i80ctk.gif" },
        { id: 36, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697856/__7_oywulw.gif" },
        { id: 37, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697854/__6_sipdgy.gif" },
        { id: 38, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697852/__5_ilndix.gif" },
        { id: 39, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697832/__4_nbfcd4.gif" },
        { id: 40, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727697830/__3_rreglv.gif" },
        { id: 41, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727266577/__2_h6nzjt.gif" },
        { id: 42, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727700655/happy_life_GIF_-_Find_Share_on_GIPHY_dzhwka.gif" },
        { id: 43, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727700648/latenights_xjsgql.gif" },
        { id: 44, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727700639/fb95727b-2d01-4cdb-aea1-7accad04945f_is5m8h.jpg" },
        { id: 45, link: "https://res.cloudinary.com/dqgrwjod2/image/upload/v1727700634/happy_life_GIF_-_Find_Share_on_GIPHY_hvx4ko.gif" },
        {id:46,link:"https://res.cloudinary.com/dqgrwjod2/image/upload/v1727700629/a4l8vys2griy_gif_960_540_jtfj56.gif"},
        {id:47,link:"https://res.cloudinary.com/dqgrwjod2/image/upload/v1727700619/7he_R4_q8rwhz.gif"},
        {id:48,link:"https://res.cloudinary.com/dqgrwjod2/image/upload/v1727700618/__mmkarv.gif"},
        {id:49,link:"https://res.cloudinary.com/dqgrwjod2/image/upload/v1727700617/__2_kezjoi.gif"},
        {id:50,link:"https://res.cloudinary.com/dqgrwjod2/image/upload/v1727700613/__1_m0dj2l.gif"}
        
      
      
      ];
      
    const [backgroundImage, setBackgroundImage] = useState(backgroundImages[Math.floor(Math.random() * 50)].link);

    const changeBackgroundImage = () => {
        setBackgroundImage(backgroundImages[Math.floor(Math.random() * 50)].link);
    };

    useEffect(() => {
        const interval = setInterval(changeBackgroundImage, 30000);
        changeBackgroundImage(); // Call the function initially

        return () => clearInterval(interval);
    }, []);

    const instructions = [
        {
            title: "Copy the YouTube URL",
            desc: "Copy the URL from the address bar of your YouTube video",
        },
        {
            title: "Paste the URL above",
            desc: "Simply paste the copied YouTube video URL above and click 'Fetch Transcript'.",
        },
        {
            title: "View the YouTube Transcript",
            desc: "Now you can view, copy, translate, summarize & download the YouTube video's transcript.",
        },
    ];

    return (
        <div className="relative h-screen w-full bg-cover bg-center transition-all duration-1000" style={{ backgroundImage: `url(${backgroundImage})` }}>
    {/* Dark Overlay */}
    <div className="absolute  bg-black opacity-75"></div>

    {/* Navbar */}
    <div className="text-center flex relative justify-center items-center">
      <Navbar />
    </div>

    {/* Main Content */}
    <div className="flex justify-center items-center "> {/* Center the content vertically and horizontally */}
      <div className="border bg-white  w-2/5 h-3/5 p-5 rounded-2xl shadow-md font-lines ">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back</h2>

        {/* Toggle between Login/Signup */}
        <div className="flex justify-center mb-4">
          <button className="px-4 py-2  rounded-l-xl w-full focus:outline-none border-r-2">
            Login
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-r-xl w-full focus:outline-none border-l-2">
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember me */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-gray-600">Remember me</label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          
          {/* Alternate option */}
          <div className="flex justify-center mt-4">
            <span className="text-gray-600">or</span>
          </div>
          <button
            type="button"
            className="w-full mt-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </div>
        
    );
};

export default SignUp;
