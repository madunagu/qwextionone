import { FC, useContext, useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import classNames from 'classnames'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import useWindowDimensions from '@/hooks/useWindowDimensions'

import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import routes from '@/utils/routes'
import { BlueDot } from '@/ui/BlueDot'

const VideoComponent = dynamic(
  () => import('@/ui/VideoComponent/VideoComponent')
)

import styles from './BecomeDistributorSection.module.scss'
import { Store } from '@/utils/Store'
import { breakpointMob, breakpointTablet } from '@/utils/variables'

type BecomeDistributorSectionProps = {
  className?: string
}

const transition = {
  ease: 'easeInOut',
  duration: 0.3,
}

const BecomeDistributorSection: FC<BecomeDistributorSectionProps> = ({
  className,
}) => {
  const ref = useRef<HTMLElement | null>(null)
  const { width } = useWindowDimensions()

  const { scrollYProgress: scrollYProgress } = useScroll({
    target: ref,
  })

  const { scrollYProgress: scrollYProgressInner } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const useParallax = (value: MotionValue<number>) => {
    return useTransform(
      value,
      [0, 1],
      width > breakpointTablet ? [800, 0] : [0, 0]
    )
  }

  const y = useParallax(scrollYProgressInner)

  const style = useMemo(() => {
    return { y: y }
  }, [y])

  const title = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', width > breakpointMob ? '750%' : '300%']
  )
  const slice = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])
  const spanTop = useTransform(scrollYProgress, [0, 1], ['-50%', '0%'])
  const spanBottom = useTransform(scrollYProgress, [0, 1], ['50%', '0%'])

  const titleStyles = useMemo(() => {
    return { x: '-50%', y: title }
  }, [title])

  const sliceTopPartStyles = useMemo(() => {
    return { top: slice }
  }, [slice])

  const sliceBottomPartStyles = useMemo(() => {
    return { bottom: slice }
  }, [slice])

  const spanTopStyles = useMemo(() => {
    return { y: spanTop }
  }, [spanTop])

  const spanBottomStyles = useMemo(() => {
    return { y: spanBottom }
  }, [spanBottom])

  const store = useContext(Store)

  const [prevIsVisible, setPrevIsVisible] = useState<boolean | null>(null)

  const handleScroll = () => {
    if (ref.current) {
      const section = ref.current
      const sectionTop = section.offsetTop
      const viewportBottom = window.scrollY + window.innerHeight
      const isSectionVisible =
        viewportBottom >= sectionTop + section.clientHeight / 2

      if (isSectionVisible !== prevIsVisible) {
        setPrevIsVisible(isSectionVisible)
        store?.dispatch({
          type: 'IS_BECOME_DISTRIBUTOR_VISIBLE',
          payload: isSectionVisible,
        })
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevIsVisible])

  return (
    <section
      ref={ref}
      className={classNames(styles['BecomeDistributorSection'], className)}
    >
      <div className={styles['stickyContainer']}>
        <div className={styles['BecomeDistributorSection__content']}>
          <VideoComponent src="/video/CTA.mp4" />
          <motion.div
            style={style}
            className={styles['BecomeDistributorSection__content_inner']}
          >
            <h2 className="h2">
              <AnimatedText title>
                Ready to experience the benefits of TV White Space internet?
              </AnimatedText>
            </h2>
            <p
              className={
                styles['BecomeDistributorSection__content_description']
              }
            >
              <AnimatedText>
                Contact QwextionOne today to speak with one of our friendly
                representatives. Whether you have questions about our services,
                want to inquire about coverage in your area, or are ready to
                sign up for a plan, we&apos;re here to help you get connected
              </AnimatedText>
            </p>
            <AnimatedElement className={styles['buttonContainer']} delay={0.2}>
              <Link scroll={false} href={'mailto:info@qwextionone.com.ng'}>
                <ButtonPrimary
                  className={styles['buttonContainer__button']}
                  variant="blue"
                >
                  Contact Us
                </ButtonPrimary>
              </Link>
            </AnimatedElement>
          </motion.div>
        </div>
        <motion.div
          transition={transition}
          style={sliceTopPartStyles}
          className={styles['top']}
        >
          <motion.div className={styles['title']} style={titleStyles}>
            <h6 className="h6">Qwextion One</h6>
            <h4 className="h4">Linking Without Boundaries</h4>
          </motion.div>
          <motion.span
            style={spanTopStyles}
            className={styles['text']}
            transition={transition}
          >
            Contact Us
            <BlueDot />
          </motion.span>
        </motion.div>
        <motion.div
          transition={transition}
          style={sliceBottomPartStyles}
          className={styles['bottom']}
        >
          <motion.span
            transition={transition}
            style={spanBottomStyles}
            className={styles['text']}
          >
            Contact Us
            <BlueDot />
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}

export default BecomeDistributorSection
