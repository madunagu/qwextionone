import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'

import dynamic from 'next/dynamic'

import Container from '@/app/layouts/Container'
import { FlipCoinTypes } from '@/modules/Home/ui/SellSection/assets/FlipCoinTypes'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'

import useWindowDimensions from '@/hooks/useWindowDimensions'
import routes from '@/utils/routes'

import styles from './SellSection.module.scss'
import { breakpointMob } from '@/utils/variables'

const loaderJsonPromise = import('./assets/businessTeam.json')
const ParallaxSection = dynamic(
  () => import('@/ui/ParallaxSection/ParallaxSection'),
  { ssr: false }
)
const SellSection = () => {
  const refLottie = useRef<LottieRefCurrentProps | null>(null)
  const ref = useRef(null)
  const [isClient, setIsClient] = useState(false)
  const [prevProgress, setPrevProgress] = useState(0)
  const [loaderJson, setLoaderJson] = useState({})

  const { width } = useWindowDimensions()
  const { scrollYProgress } = useScroll({ target: ref })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 61])
  useMotionValueEvent(progress, 'change', (latest) => {
    const roundedLatest = Math.round(latest)
    if (roundedLatest !== prevProgress) {
      refLottie.current?.goToAndStop(roundedLatest, true)
      setPrevProgress(roundedLatest)
    }
  })
  useEffect(() => {
    loaderJsonPromise.then((data) => {
      setIsClient(true)
      setLoaderJson(data.default)
    })
  }, [])

  return (
    <section ref={ref} className={styles['sellSection']}>
      <Container>
        <div className={styles['sellSection__content']}>
          {isClient && width > breakpointMob ? (
            <div className={styles['sellSection__content_left']}>
              <div className={styles['imageWrapper']}>
                <Lottie
                  className={styles['imageContainer']}
                  animationData={loaderJson}
                  lottieRef={refLottie}
                  autoplay={false}
                />
              </div>
            </div>
          ) : null}
          {/* {isClient && width > breakpointMob ? (
            <div className={styles["sellSection__content_left"]}>
              <div className={styles["imageWrapper"]}>
                <ParallaxSection
                  className={styles["story__content_left"]}
                  parallaxValues={[0, 0]}
                >
                  <BackgroundImage
                    src="/images/home/reading.jpg"
                    // className={styles["photoContainer"]}
                    alt="Qwextione One About"
                    cover={true}
                    description="expanding reach and access to internet"
                    parallax
                    parallaxValues={[0, 0]}
                  />
                </ParallaxSection>
              </div>
            </div>
          ) : null} */}
          <ul className={styles['sellSection__content_right']}>
            <li className={styles['sectionWrapper']}>
              <div className={styles['sectionContent']}>
                <BackgroundImage
                  src="/images/home/reading.jpg"
                  className={styles['image']}
                  quality={100}
                  cover={true}
                  alt="Community Impact"
                />
                <h6 className={classNames('h6', styles['subtitle'])}>
                  <AnimatedText title>Community Impact</AnimatedText>
                </h6>
                <h2 className={classNames('h3', styles['title'])}>
                  <AnimatedText title>
                    Empowering Communities Through Connectivity
                  </AnimatedText>
                </h2>
                <p className={styles['description']}>
                  <AnimatedText>
                    At QwextionOne, we believe that internet access is essential
                    for community development and economic growth. By providing
                    reliable and affordable internet services, we are empowering
                    individuals, businesses, and organisations to thrive in
                    today&apos;s digital world.
                  </AnimatedText>
                </p>
                <AnimatedElement delay={0.2}>
                  <Link scroll={false} href={'#'}>
                    <ButtonPrimary
                      variant={'noStroked'}
                      className={styles['button']}
                    >
                      Learn More
                    </ButtonPrimary>
                  </Link>
                </AnimatedElement>
              </div>
            </li>
            <li className={styles['sectionWrapper']}>
              <div className={styles['sectionContent']}>
                <BackgroundImage
                  src="/images/home/nasa.jpg"
                  className={styles['image']}
                  quality={100}
                  cover={true}
                  alt="Coverage map"
                />
                <h6 className={classNames('h6', styles['subtitle'])}>
                  <AnimatedText title>Coverage Map</AnimatedText>
                </h6>
                <h2 className={classNames('h3', styles['title'])}>
                  <AnimatedText title>
                    Check Our TVWS Coverage Area
                  </AnimatedText>
                </h2>
                <p className={styles['description']}>
                  <AnimatedText>
                    Wondering if QwextionOne services are available in your
                    area? Explore our coverage map to see if we offer TVWS
                    internet services in your community. With expanding coverage
                    and ongoing network deployments, we&apos;re working to bring
                    high-speed internet access to more underserved areas. Check
                    our coverage map to see if you&apos;re eligible for our
                    services.
                  </AnimatedText>
                </p>
                <AnimatedElement delay={0.2}>
                  <a href="https://maps.google.com" target="_blank">
                    <ButtonPrimary
                      variant={'noStroked'}
                      className={styles['button']}
                    >
                      View Coverage Map
                    </ButtonPrimary>
                  </a>
                </AnimatedElement>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default SellSection
