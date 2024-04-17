import classNames from 'classnames'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Container from '@/app/layouts/Container'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import routes from '@/utils/routes'
const VideoComponent = dynamic(
  () => import('@/ui/VideoComponent/VideoComponent'),
  { ssr: false }
)

const ParallaxSection = dynamic(
  () => import('@/ui/ParallaxSection/ParallaxSection'),
  { ssr: false }
)

import styles from './IntroSection.module.scss'

const IntroSection = () => {
  return (
    <section className={styles['intro']}>
      <ParallaxSection
        parallaxValues={[-300, 300]}
        className={styles['intro__video']}
      >
        <VideoComponent src="/video/CTA.mp4" />
      </ParallaxSection>
      <Container>
        <ParallaxSection
          className={styles['intro__content']}
          parallaxValues={[200, -250]}
        >
          <div className={styles['intro__content_top']}>
            <h1 className={classNames('h1', styles['title'])}>
              <AnimatedText title withBlueDot>
                QWEXTION ONE
              </AnimatedText>
            </h1>
            <div className={styles['description']}>
              <AnimatedElement delay={0.2} reverse>
                ..linking without boundaries
              </AnimatedElement>
            </div>
          </div>
          <div className={styles['intro__content_bottom']}>
            <AnimatedElement className={styles['buttonContainer']} delay={0.2}>
              <Link scroll={false} href={'mailto:info@qwextionone.com.ng'}>
                <ButtonPrimary
                  className={styles['buttonContainer__button']}
                  variant="white"
                >
                  Learn more
                </ButtonPrimary>
              </Link>
            </AnimatedElement>
            <div className={styles['subtitle']}>
              <AnimatedElement delay={0.2}>
                Discover the power of TVWS Technology with QwextionOne.
              </AnimatedElement>
            </div>
          </div>
        </ParallaxSection>
      </Container>
    </section>
  )
}

export default IntroSection
