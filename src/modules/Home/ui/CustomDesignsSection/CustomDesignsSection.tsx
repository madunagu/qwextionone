import { FC } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import Container from '@/app/layouts/Container'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import routes from '@/utils/routes'
import AnimateScaleBg from '@/ui/AnimateScaleBG/AnimateScaleBG'

import styles from './CustomDesignsSection.module.scss'
import { breakpointMob } from '@/utils/variables'

const images = [
  '/images/home/customDesign/tvws_3.jpg',
  '/images/home/customDesign/tvws_4.jpg',
  // '/images/home/customDesign/tvws_5.jpg',
  '/images/home/customDesign/tvws_6.jpg',
  // "/images/home/customDesign/slide_2.jpg",
  // "/images/home/customDesign/slide_3.jpg",
  // "/images/home/customDesign/slide_4.jpg",
  // "/images/home/customDesign/slide_5.jpg",
]

const CustomDesignsSection: FC<{ className?: string }> = ({ className }) => {
  const { width } = useWindowDimensions()

  return (
    <section className={classNames(styles['CustomDesignsSection'], className)}>
      {width > breakpointMob ? (
        <AnimateScaleBg images={images} />
      ) : (
        <div className={styles['CustomDesignsSection__mob']}>
          <BackgroundImage
            className={styles['CustomDesignsSection__mob_image']}
            src="/images/home/customDesign/slide_mob_1.jpg"
            alt="Custom Minting Program"
          />
        </div>
      )}
      <Container>
        <div className={styles['CustomDesignsSection__content']}>
          <h6
            className={classNames(
              'h6',
              styles['CustomDesignsSection__content_subtitle']
            )}
          >
            <AnimatedText title>TVWS Technology</AnimatedText>
          </h6>
          <h2
            className={classNames(
              'h2',
              styles['CustomDesignsSection__content_title']
            )}
          >
            <AnimatedText title withBlueDot>
              Discover the Benefits of TV White Space
            </AnimatedText>
          </h2>
          <p className={styles['CustomDesignsSection__content_description']}>
            <AnimatedText>
              TV White Space technology utilises unused spectrum between TV
              channels to deliver broadband internet access over long distances.
              With its ability to penetrate obstacles and cover vast areas, TVWS
              is an ideal solution for extending internet connectivity to rural
              and remote locations. Take advantage of TVWS technology and how it
              can transform connectivity in your area.
            </AnimatedText>
          </p>
          <AnimatedElement delay={0.2}>
            <Link scroll={false} href={'#'}>
              <ButtonPrimary
                className={styles['CustomDesignsSection__content_button']}
              >
                Learn more
              </ButtonPrimary>
            </Link>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  )
}

export default CustomDesignsSection
