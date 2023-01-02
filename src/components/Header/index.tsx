import React from "react";

import Link from "next/link";
import Logo from "images/logo.svg";

export default function index() {
  return (
    <header className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center">
        <div className="w-28">
          <Logo className="logo-style-1" />
        </div>

        <div className="w-auto">
          <ul className="flex items-center">
            <li>
              <Link href="/destination" legacyBehavior>
                <a className="px-9 text-gray-800">Destination</a>
              </Link>
            </li>
            <li>
              <Link href="/hotels" legacyBehavior>
                <a className="px-9 text-gray-800">Hotels</a>
              </Link>
            </li>
            <li>
              <Link href="/flights" legacyBehavior>
                <a className="px-9 text-gray-800">Flights</a>
              </Link>
            </li>
            <li>
              <Link href="/bookings" legacyBehavior>
                <a className="px-9 text-gray-800">Bookings</a>
              </Link>
            </li>
            <li>
              <Link href="/login" legacyBehavior>
                <a className="px-9 text-gray-800">Login</a>
              </Link>
            </li>
            <li>
              <Link href="/sign-up" legacyBehavior>
                <a className="px-5 text-gray-800 py-1 border border-gray-800 rounded-lg mx-3">
                  Sign Up
                </a>
              </Link>
            </li>
            <li>
              <button className="px-9 text-gray-800 relative">
                EN
                <span className="absolute w-2 h-2 border-gray-800 border-r border-b transform rotate-45 translate-y-1/2 ml-2"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
