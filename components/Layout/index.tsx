import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import * as siteConfig from '../../config/site.config'
import LoadingBar from 'react-top-loading-bar'
import { CachedUser } from '../../types'
import { logUserInFromCache } from '../../features/auth/auth'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'

export default function Layout({ children }: { children: JSX.Element }) {
  const color = "##FFFFFF";
  const title = `${siteConfig.title}`
  const url = `${siteConfig.app_url}`
  const des = `Reviews from satisfied clients/customers can now be collected easily with ReviewGush using video, images, text, ratings, or even a combination of all four formats.`
  const keywords = `reviews, collect reviews, share reviews, manage reviews, embed reviews, coaches reviews, review, client reviews, customers reviews, video reviews, wall of love, sales reviews, course creation, business tools, smes`
  const og_image = `${url}/icons/reviewgush.png`;
  const { primary, secondary } = siteConfig.color;

  // 
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {

    let saved_user_obj = window.localStorage.getItem(siteConfig.auth_cache_key);

    if (saved_user_obj !== null) {
      const full_user = JSON.parse(saved_user_obj) as CachedUser;
      dispatch(logUserInFromCache(full_user));
    }

  }, []);

  return (
    <Box>

      <Head>
        <title>{title}</title>

        {/* meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={des} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Joseph O. Ajibodu" />

        {/* Favicon */}
        <link rel="icon" href="/favicos/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicos/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicos/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicos/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicos/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicos/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicos/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicos/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicos/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicos/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicos/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicos/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicos/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicos/favicon-16x16.png" />
        <link rel="manifest" href="/favicos/manifest.json" />
        <meta name="msapplication-TileColor" content={`${primary}`} />
        <meta name="msapplication-TileImage" content="/favicos/ms-icon-144x144.png" />
        <meta name="theme-color" content={`${primary}`} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={des} />
        <meta property="og:image" content={og_image} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={url} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={des} />
        <meta name="twitter:image" content={og_image} />

        {/* Open Graph data */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={og_image} />
        <meta property="og:description" content={des} />
        <meta property="og:site_name" content={siteConfig.title} />

        {/* Browser Color */}
        <meta name="theme-color" content={color} />
        <meta name="msapplication-navbutton-color" content={color} />
        {/* Do not add <script> tags using next/head 
        See more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component  */}
      </Head>

      <Box>
        <Header />
        {children}
        <Footer />
      </Box>
    </Box>
  )
}
