import Layout from '../components/layout/Layout'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

const aksesor = () => {

    let { t } = useTranslation()
    return (
        <>
            <Layout>
            

            <div className="hero-syze relative">
                    <Image
                        src="/images/accesories/hx-keyfeatures-eyewear-spectre-eyewear-line-2-lg.jpg"
                        alt="Hero pic of Accessories"
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
                <div className="px-20 mx-auto lg:mt-40">
                <div className="lg:w-3/5 my-24 text-center ml-0 lg:text-left lg:ml-20">
                    <p className="text-gray-800 uppercase text-2xl lg:text-4xl tracking-wider mb-5">{t('aksesorë:title')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg">{t('aksesorë:description')}
                    </p>
                </div>
                <div className="flex flex-col justify-center lg:flex-row">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/ReNu-800x600.png" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:Renu')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:RenuDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row-reverse">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/Biofinity.png" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:Biofinity')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg  mt-5">{t('aksesorë:BiofinityDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/BioMediks-1200x703.png" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800text-2xl lg:text-4xl font-semibold">{t('aksesorë:Biomedics')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:BiomedicsDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row-reverse">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/Alvera.jpg" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:Alvera')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:AlveraDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/uniqa-sensitive-800x600.jpg" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:Unika')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:UnikaDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row-reverse">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/All-clean-800x600.jpg" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:Allclean')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:AllcleanDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/lacrifresh-moisture-bottles_1.jpg" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:Lactifresh')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:LactifreshDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row-reverse">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/enzyme-avizor.jpg" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:Enzyme')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:EnzymeDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/gp-cleaner.jpg" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:GpCleaner')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:GpCleanerDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row-reverse">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/AVIZOR-GP-2-CONDITIONER.jpg" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:GpConditioner')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:GpConditionerDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/hylo-comod-augentropfen-1.jpg" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:HyloComod')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:HyloComodDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row-reverse">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/hylo-care-700x700.jpg" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:HyloCare')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:HyloCareDesc')}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center lg:flex-row">
                <figure className="m-auto">
                    <Image 
                        src="/images/accesories/hylo-gel.jpg" 
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="700"
                        height="500"
                    />
                </figure>
                <div className="lg:w-6/12 mb-16 lg:mt-16 text-center lg:text-left">
                    <p className="text-gray-800 text-2xl lg:text-4xl font-semibold">{t('aksesorë:HyloGel')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg mt-5">{t('aksesorë:HyloGelDesc')}</p>
                </div>
            </div>
            </div>
        </Layout>
        </>
    )
}

export default aksesor
