import { SITE_NAME } from '../constants';
import aboutPhoto from '../assets/mattressmagic-about.svg';

const About = () => {
    return (
        <div className='relative bg-white'>
            <div className='mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end'>
                <div className='lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2'>
                    <div className='relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0'>
                        <img
                            className='absolute inset-0 h-full w-full bg-gray-50 object-cover'
                            src={aboutPhoto}
                            alt={`The team at ${SITE_NAME}`}
                        />
                    </div>
                </div>
                <div className='px-6 lg:contents'>
                    <div className='mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2'>
                        <p className='text-base font-semibold leading-7 text-copa-gold-600'>
                            Family-owned since 2010
                        </p>
                        <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                            An Inside Look Into Mattress Magic
                        </h1>
                        <p className='mt-6 text-xl leading-8 text-gray-700'>
                            Welcome to <strong>{SITE_NAME}</strong>, a family-owned mattress and
                            furniture store proudly serving Phoenix and Tempe since 2010. We started
                            with a simple belief: quality sleep makes life better &mdash; and everyone
                            deserves it without paying big-box prices.
                        </p>
                        <div className='mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none'>
                            <p>
                                That&rsquo;s the magic behind our name: we bring you high-quality
                                mattresses and furniture at a fraction of the price you&rsquo;d find
                                at the big chains, backed by friendly, personalized service from
                                people who know sleep.
                            </p>
                            <p className='mt-8'>
                                Our showroom features an extensive selection from trusted brands
                                like Beautyrest, Serta, Puffy, Ashley, and BIA Eclipse Glacier
                                &mdash; plus stylish, name-brand furniture to complete every room in
                                your home.
                            </p>
                            <p className='mt-8'>
                                From our 2 Year Comfort Guarantee to convenient financing and white
                                glove delivery, we make upgrading your sleep easy and affordable.
                                The Magic&rsquo;s in the Deal and how Grrreat! you&rsquo;ll Feel.
                            </p>
                            <p className='mt-8'>
                                Experience the difference of shopping local. Whether you visit us
                                in-store or browse our online showroom, we promise quality you can
                                feel and prices you&rsquo;ll love.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
