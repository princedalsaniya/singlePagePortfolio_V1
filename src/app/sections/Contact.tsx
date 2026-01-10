import grainImage from '@/app/assets/images/grain.jpg';
import ArrowUpRightIcon from '@/app/assets/icons/arrow-up-right.svg';

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl font-semibold md:text-3xl">Let's Work Together</h2>
              <p className="text-sm mt-2 md:text-base">
                I'm exploring opportunities with product-focused companies building developer tools, AI products, or
                workflow automation.
              </p>
              <p className="text-sm mt-2 md:text-base">
                If you're looking for a full-stack engineer who ships fast and owns features end-to-end, let's talk.
              </p>
              <div className="mt-4 text-sm md:text-base space-y-1">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:pdalsaniya1@gmail.com" className="underline hover:text-white">
                    pdalsaniya1@gmail.com
                  </a>
                </p>
                <p>
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href="https://www.linkedin.com/in/prince-dalsaniya-256b031a1/"
                    target="_blank"
                    className="underline hover:text-white"
                  >
                    prince-dalsaniya
                  </a>
                </p>
                <p>
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/princedalsaniya" target="_blank" className="underline hover:text-white">
                    princedalsaniya
                  </a>
                </p>
              </div>
            </div>
            <div>
              <a href="mailto:pdalsaniya1@gmail.com">
                <button className="text-white bg-gray-900 inline-flex items-center justify-center gap-2 px-6 rounded-xl h-12 w-max hover:bg-white hover:text-gray-900">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
