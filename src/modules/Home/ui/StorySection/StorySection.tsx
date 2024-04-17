import { FC } from 'react'
import dynamic from 'next/dynamic'
import classNames from 'classnames'
import Link from 'next/link'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import Container from '@/app/layouts/Container'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import routes from '@/utils/routes'

const ParallaxSection = dynamic(
  () => import('@/ui/ParallaxSection/ParallaxSection'),
  { ssr: false }
)

import styles from './StorySection.module.scss'

const StorySection: FC = () => {
  return (
    <section className={styles['story']}>
      <ParallaxSection
        className={styles['story__abstract']}
        parallaxValues={[-200, 200]}
      />
      <Container>
        <div className={styles['story__content']}>
          <ParallaxSection
            className={styles['story__content_left']}
            parallaxValues={[100, -100]}
          >
            <h3 className={classNames('h3', styles['title'])}>
              <AnimatedText title>
                We&apos;re dedicated to bringing fast, reliable, and affordable
                Internet access to rural and unreached areas.
              </AnimatedText>
            </h3>
            <p className={styles['description']}>
              <AnimatedText>
                At QwextionOne, we&apos;re expanding reach and access to
                internet connectivity with TV White Space technology. We are
                committed to providing robust and scalable internet solutions to
                areas with limited access to traditional broadband services.
                Learn more about our company&apos;s vision, values, and
                commitment to empowering communities through technology.
              </AnimatedText>
            </p>
            <BackgroundImage
              src="/images/home/reading.jpg"
              className={styles['photoContainer']}
              alt="Qwextione One About"
              cover={true}
              description="expanding reach and access to internet"
              parallax
              parallaxValues={[-100, 100]}
            />
          </ParallaxSection>
          <ParallaxSection
            className={styles['story__content_right']}
            parallaxValues={[200, -400]}
          >
            <BackgroundImage
              src="/images/home/elephant.jpg"
              className={styles['photoContainer']}
              quality={100}
              alt="Elephant photo"
              cover={true}
              parallax
              parallaxValues={[-50, 50]}
            />
            <div className={styles['text']}>
              <h4 className="h4">
                <AnimatedText title>QwextionOne&apos;s Mission</AnimatedText>
              </h4>
              <p style={{ color: 'var(--gray-800)' }}>
                <AnimatedText>
                  Narrowing the digital divide between connected and isolated
                  through internet connectivity
                </AnimatedText>
              </p>
            </div>
            <AnimatedElement className={styles['buttonContainer']} delay={0.2}>
              <Link scroll={false} href={'#'}>
                <ButtonPrimary
                  className={styles['buttonContainer__button']}
                  variant="transparent"
                >
                  Our story
                </ButtonPrimary>
              </Link>
            </AnimatedElement>
          </ParallaxSection>
        </div>
      </Container>
    </section>
  )
}

export default StorySection
