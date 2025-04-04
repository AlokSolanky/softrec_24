import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-white shadow-sm dark:bg-black">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="max-sm:flex max-sm:flex-col max-sm:items-center sm:flex sm:items-center sm:justify-between">
            <a
              href="https://softrec.nitt.edu"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                SOFTREC
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-white">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 sm:mx-auto lg:my-8" />
          <span class="block text-sm text-white text-center dark:text-white">
            © 2025{" "}
            <a href="https://softrec.nitt.edu" class="hover:underline">
              SOFTREC™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;
