import React from 'react';
import { Element, Link } from 'react-scroll';

import juddFamilyImg from '@/assets/img/judd-family.jpg';
import heroLogo from '@/assets/img/logogreennopole.png';
import { Footer } from '@/components/Footers/Footer';
import { Navbar } from '@/components/Navbars/AuthNavbar';

import { ContactForm } from './Contact';

export type Service = {
  title: string;
  paragraphs: string[];
  icon: string;
  bulletPoints: { icon: string; text: string }[];
};

export const Landing = () => {
  const services: Service[] = [
    {
      title: 'Utility Construction',
      icon: 'fa-triangle-person-digging',
      paragraphs: [
        'Both inside and outside infrastructure including overhead and underground right-of-way construction',
      ],
      bulletPoints: [
        {
          icon: 'fa-buildings',
          text: 'Commercial',
        },
        {
          icon: 'fa-utility-pole-double',
          text: 'Telecomunications',
        },
      ],
    },
    {
      title: 'Fiber Optic Systems',
      paragraphs: ['Design, Construction, Repair and Maintenance'],
      icon: 'fa-globe ',
      bulletPoints: [
        {
          icon: 'fa-network-wired',
          text: 'Networking',
        },
        {
          icon: 'fa-magnifying-glass',
          text: 'Testing',
        },
      ],
    },
    {
      title: 'Arial Construction',
      paragraphs: [
        'With a One man Boom truck lift of 42 vertical feet and 27 foot lateral reach we can get to hard to reach places.',
      ],
      icon: 'fa-globe ',
      bulletPoints: [
        {
          icon: 'fa-utility-pole',
          text: 'Utility Pole',
        },
        {
          icon: 'fa-tree-deciduous',
          text: 'Tree Trimming and Removal',
        },
        {
          icon: 'fa-up',
          text: 'Hard to reach Heights',
        },
      ],
    },
    {
      title: 'Underground construction',
      paragraphs: [
        'With an excavator, skidsteer, and plenty of shovels, we can dig, drill, or trench most any hole and move quite a bit a dirt.',
      ],
      icon: 'fa-globe ',
      bulletPoints: [
        {
          icon: 'fa-shovel',
          text: 'Trenching, leveling and other limited excavation.',
        },
        {
          icon: 'fa-down',
          text: 'Trenchless bore work',
        },
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <main>
        <div className='relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75'>
          <div
            className='absolute top-0 w-full h-full bg-center bg-cover'
            style={{
              backgroundImage: "url('./green-cable-road.jpg')",
            }}>
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-60 bg-black'></span>
          </div>
          <div className='container relative mx-auto'>
            <div className='items-center flex flex-wrap'>
              <div className='w-full lg:w-9/12 px-4 ml-auto mr-auto text-center'>
                <div className='pr-12'>
                  <img src={heroLogo} alt='Over & Under' />
                  <h1 className='text-white font-semibold text-5xl'>
                    Your local General Contractor.
                  </h1>
                  <p className='mt-4 text-lg text-blueGray-200'>
                    We build, design, create, and work with you to help your
                    dreams come true. While certainly there are some things that
                    we specialize in, there are many more that we are just plain
                    good at.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px'
            style={{ transform: 'translateZ(0)' }}>
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'>
              <polygon
                className='text-blueGray-200 fill-current'
                points='2560 0 2560 100 0 100'></polygon>
            </svg>
          </div>
        </div>

        <section className='pb-20 bg-blueGray-200 -mt-24'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap'>
              <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lime-500'>
                      <i className='fas fa-award'></i>
                    </div>
                    <h6 className='text-xl font-semibold'>Fully Licensed</h6>
                    <p className='mt-2 mb-4 text-blueGray-500'>
                      Utah State Licensed Business and General Contractor. Fully
                      insured to protect our work, our clients, and our
                      employees.
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-navy-400'>
                      <i className='fas fa-family'></i>
                    </div>
                    <h6 className='text-xl font-semibold'>
                      Family Owned <br /> & Operated
                    </h6>
                    <p className='mt-2 mb-4 text-blueGray-500'>
                      We focus on building friendships that last, we believe
                      that a level of trust and honesty is more important than a
                      few extra dollars.
                    </p>
                  </div>
                </div>
              </div>

              <div className='pt-6 w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-500'>
                      <i className='fa-solid fa-handshake'></i>
                    </div>
                    <h6 className='text-xl font-semibold'>Customer Service</h6>
                    <p className='mt-2 mb-4 text-blueGray-500'>
                      We firmly believe that if we do right by our customers,
                      they will spread the word about us. We enjoy our repeat
                      customers, they have become our friends.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap items-center mt-32'>
              <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
                <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                  <i className='fa-solid fa-helmet-safety text-xl'></i>
                </div>
                <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                  Get to know Dave
                </h3>
                <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                  As the sole owner and opperater of Over &amp; Under
                  construction LLC. Dave has turned his passion for building and
                  creating in to a buisness that has been able to serverice many
                  home owners, individuals, and local buisnesses
                </p>
                <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600'>
                  With his 30+ years experience in telecomunications, general
                  construction, and other specialties Dave brings a unique and
                  well rounded view to each project. Dave can see the bigger
                  picture ensuring that his work is not only excelent, but fits
                  within the space around it.
                </p>
                <Link
                  activeClass='font-bold text-blueGray-700 mt-8 active'
                  className='font-bold text-blueGray-700 mt-8 test2'
                  to='contact-us-form'
                  spy={true}
                  smooth={true}
                  duration={500}>
                  Start your next project with Dave!
                </Link>
              </div>

              <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
                <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-ashBlue-500'>
                  <img
                    alt='...'
                    src={juddFamilyImg}
                    className='w-full align-middle rounded-t-lg'
                  />
                  <blockquote className='relative p-8 mb-4'>
                    <svg
                      preserveAspectRatio='none'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 583 95'
                      className='absolute left-0 w-full block h-95-px -top-94-px'>
                      <polygon
                        points='-30,95 583,95 583,65'
                        className='text-ashBlue-500 fill-current'></polygon>
                    </svg>
                    <h4 className='text-xl font-bold text-white'>
                      The Judd Family
                    </h4>
                    <p className='text-md font-light mt-2 text-white'>
                      Dave is the father of 5 kids and 3 grandaughters. Dave
                      loves spending time with his family and building lasting
                      relations.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='relative py-20'>
          <div
            className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20'
            style={{ transform: 'translateZ(0)' }}>
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'>
              <polygon
                className='text-white fill-current'
                points='2560 0 2560 100 0 100'></polygon>
            </svg>
          </div>

          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-center text-center mb-16'>
              <div className='w-full lg:w-6/12 px-4'>
                <h2 className='text-4xl font-semibold'>
                  Our Services and Specialties
                </h2>
              </div>
            </div>
            <div className='flex flex-wrap'>
              {services.map(({ title, paragraphs, icon, bulletPoints }, i) => (
                <div
                  className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'
                  key={i}>
                  <div className='px-6'>
                    <div className='text-blueGray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blueGray-200'>
                      <i className={`fa-solid text-xl ${icon}`}></i>
                    </div>
                    <h5 className='text-xl font-bold'>{title}</h5>
                    {paragraphs.map((text, j) => (
                      <p className='mt-1 text-sm  text-blueGray-500' key={j}>
                        {text}
                      </p>
                    ))}
                    <ul className='list-none mt-2'>
                      {bulletPoints.map(({ icon, text }, k) => (
                        <li className='py-1' key={k}>
                          <div className='flex items-center'>
                            <div>
                              <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-600 bg-blueGray-200 mr-2'>
                                <i className={`fas ${icon}`}></i>
                              </span>
                            </div>
                            <div>
                              <h4 className='text-xs text-blueGray-500'>
                                {text}
                              </h4>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='pb-20 relative block bg-blueGray-800'>
          <Element name='contact-us-form' />
          <div
            className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20'
            style={{ transform: 'translateZ(0)' }}>
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'>
              <polygon
                className='text-blueGray-800 fill-current'
                points='2560 0 2560 100 0 100'></polygon>
            </svg>
          </div>

          <div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
            <div className='flex flex-wrap text-center justify-center'>
              <div className='w-full lg:w-6/12 px-4'>
                <h2 className='text-4xl font-semibold text-white'>
                  Build Something Together
                </h2>
                <p className='text-lg leading-relaxed mt-4 mb-4 text-blueGray-400'>
                  We&apos;re here to empower you to get the job done. So
                  let&apos;s work toghether to make your make your dreams a
                  reality. Contact us below to get started.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='relative block py-24 lg:pt-0 bg-blueGray-800'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-center lg:-mt-64 -mt-48'>
              <div className='w-full lg:w-6/12 px-4'>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
