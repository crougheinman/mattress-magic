import { Link } from 'react-router-dom';
import { SITE_NAME } from '../constants';
import heroImage from '../assets/mattressmagic-hero.webp';

const Hero = () => {
    return (
        <div className='bg-[#0b001a]'>
            <div className='relative isolate overflow-hidden pt-14'>
                <img
                    src={heroImage}
                    alt=''
                    className='absolute inset-0 -z-10 h-full w-full object-cover'
                />
                <div className='absolute inset-0 -z-10 bg-linear-to-t from-[#0b001a]/95 via-[#0b001a]/65 to-[#1a1025]/40'></div>

                <div
                    className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
                    aria-hidden='true'
                >
                    <div
                        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-copa-gold-500 to-copa-blue-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                        style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                    >
                    </div>
                </div>
                <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-50'>
                    <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                        <div
                            className='relative rounded-full bg-[#1a1025]/70 px-4 py-1.5 text-sm leading-6 text-[#cdbfe6] ring-1 ring-copa-gold-600/40 backdrop-blur-sm transition hover:ring-copa-blue-500/60'
                        >
                            Family-owned in Phoenix &amp; Tempe since 2010. <a
                                href='https://www.yelp.com/biz/mattress-magic-tempe/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-semibold text-[#ffffff]'
                            ><span className='absolute inset-0' aria-hidden='true'></span>Shop now <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold tracking-tight text-[#ffffff] sm:text-6xl'>
                            {SITE_NAME}
                        </h1>
                        <p className='mt-6 text-xl leading-8 text-[#cdbfe6]'>
                            The Magic&rsquo;s in the Deal and how Grrreat you&rsquo;ll Feel &mdash; quality mattresses &amp; furniture at a fraction of big-box prices.
                        </p>
                        <div className='mt-10 flex items-center justify-center gap-x-6'>
                            <Link
                                to='/shop'
                                className='rounded-md bg-copa-blue-500 px-3.5 py-2.5 text-sm font-semibold text-[#0b001a] shadow-sm hover:bg-copa-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copa-blue-500'
                            >
                                Shop Mattresses
                            </Link>
                            <a href='#features' className='text-sm font-semibold leading-6 text-[#ffffff]'>
                                Learn more <span aria-hidden='true'>→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
                    aria-hidden='true'
                >
                    <div
                        className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-copa-gold-500 to-copa-blue-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
                        style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
