import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-[#1f1f22] flex flex-col md:flex-row justify-between items-center text-gray-200 px-6 py-6 gap-4 md:gap-0">
        <p className="text-center md:text-left">© {new Date().getFullYear()} Wings & Dumplings. All rights reserved.</p>
        <div className="flex justify-center items-center gap-6">
          <a href="https://www.facebook.com/profile.php?id=61575756073640" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/wingsanddumplings/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@wings.and.dumplin" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </footer>
  )
}

export default Footer