// Libraries
import React from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"
import type { Context } from "../../../types"

// Components
import ActionCard from "../../../components/ActionCard"
import Breadcrumbs from "../../../components/Breadcrumbs"
import Link from "../../../components/Link"
import PageMetadata from "../../../components/PageMetadata"
import Translation from "../../../components/Translation"
import TranslationLeaderboard from "../../../components/TranslationLeaderboard"
import { Content, Page } from "../../../components/SharedStyledComponents"
import FeedbackCard from "../../../components/FeedbackCard"

// Utils
import { getImage } from "../../../utils/image"

// Styles
const H1 = styled.h1`
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 2rem;
  }
`

const H2 = styled.h2``

const TwoColumnContent = styled.div`
  display: flex;
  width: 100%;
  margin-right: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0rem;
    margin-right: 0rem;
  }
`

const LeaderboardContent = styled(Content)`
  max-width: 800px;
  h2 {
    text-align: center;
  }
`

const LeftColumn = styled.div`
  margin-right: 2rem;
  width: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: auto 0rem;
    width: 100%;
  }
`

const RightColumn = styled.div`
  margin-left: 2rem;
  width: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: auto 0rem;
    width: 100%;
  }
`

const CertificateImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Image = styled(GatsbyImage)`
  background-size: contain;

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    max-height: 300px;
    max-width: 300px;
  }
`

const CentralActionCard = styled(ActionCard)`
  flex: none;
  margin: 2rem 0;
  .action-card-image-wrapper {
    padding: 1rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    display: flex;

    .action-card-image-wrapper {
      min-width: 260px;
    }
    .action-card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 1rem;

      p {
        margin-bottom: 0;
      }
    }
  }
`

const TranslatorAcknowledgements = ({
  data,
  location,
}: PageProps<Queries.TranslatorAcknowledgementsPageQuery, Context>) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isDarkTheme = theme.isDark
  const themedCertificateImage = isDarkTheme
    ? data.darkThemeCertificate
    : data.lightThemeCertificate

  return (
    <Page>
      <PageMetadata
        title={t(
          "page-contributing-translation-program-acknowledgements-meta-title"
        )}
        description={t(
          "page-contributing-translation-program-acknowledgements-meta-description"
        )}
      />

      <Content>
        <Breadcrumbs slug={location.pathname} />
        <H1>
          <Translation id="page-contributing-translation-program-acknowledgements-acknowledgement-page-title" />
        </H1>
        <TwoColumnContent>
          <LeftColumn>
            <p>
              <Translation id="page-contributing-translation-program-acknowledgements-acknowledgement-page-1" />
            </p>
            <p>
              <Translation id="page-contributing-translation-program-acknowledgements-acknowledgement-page-2" />
            </p>
            <p>
              <Translation id="page-contributing-translation-program-acknowledgements-acknowledgement-page-3" />{" "}
              <Link to="/contributing/translation-program/contributors/">
                <Translation id="page-contributing-translation-program-acknowledgements-acknowledgement-page-link" />
              </Link>
              .
            </p>
            <p>
              <Translation id="page-contributing-translation-program-acknowledgements-acknowledgement-page-4" />
            </p>
            {/* TODO: add certification section */}
            {/* <p>
              <Translation id="page-contributing-translation-program-acknowledgements-acknowledgement-page-5" />
            </p> */}
          </LeftColumn>
          <RightColumn>
            <Image
              image={getImage(data.dogeComputer)!}
              alt={t(
                "page-contributing-translation-program-acknowledgements-hero-image-alt"
              )}
              objectFit="contain"
            />
          </RightColumn>
        </TwoColumnContent>
      </Content>

      <LeaderboardContent>
        <H2>
          <Translation id="page-contributing-translation-program-acknowledgements-translation-leaderboard-title" />
        </H2>
        <TranslationLeaderboard
          monthData={data.monthData}
          quarterData={data.quarterData}
          allTimeData={data.allTimeData}
        />
        <p>
          <Translation id="page-contributing-translation-program-acknowledgements-translation-leaderboard-1" />
        </p>
      </LeaderboardContent>

      <Content>
        <H2>
          <Translation id="page-contributing-translation-program-acknowledgements-our-translators-title" />
        </H2>
        <p>
          <Translation id="page-contributing-translation-program-acknowledgements-our-translators-1" />
        </p>
        <CentralActionCard
          to="/contributing/translation-program/contributors/"
          title={t(
            "page-contributing-translation-program-acknowledgements-our-translators-view-all"
          )}
          description={t(
            "page-contributing-translation-program-acknowledgements-our-translators-cta"
          )}
          image={getImage(data.ethereum)!}
        />
      </Content>

      <Content id="certificate">
        <H2>
          <Translation id="page-contributing-translation-program-acknowledgements-cert-title" />
        </H2>
        <p>
          <Translation id="page-contributing-translation-program-acknowledgements-cert-1" />
        </p>
        <p>
          <Translation id="page-contributing-translation-program-acknowledgements-cert-2" />
        </p>
        <p>
          <Translation id="page-contributing-translation-program-acknowledgements-cert-3" />
        </p>
        <CertificateImageWrapper>
          <Image
            image={getImage(themedCertificateImage)!}
            alt="translator certificate"
            objectFit="contain"
          />
        </CertificateImageWrapper>
      </Content>

      <Content id="poap">
        <H2>
          <Translation id="page-contributing-translation-program-acknowledgements-poaps-title" />
        </H2>
        <p>
          <Translation id="page-contributing-translation-program-acknowledgements-1" />
        </p>
        <p>
          <Translation id="page-contributing-translation-program-acknowledgements-2" />
        </p>
        <p>
          <Translation id="page-contributing-translation-program-acknowledgements-3" />
        </p>
        <h3>
          <Translation id="page-contributing-translation-program-acknowledgements-how-to-claim-title" />
        </h3>
        <ol type="1">
          <li>
            <Translation id="page-contributing-translation-program-acknowledgements-how-to-claim-1" />{" "}
            <Link to="https://discord.gg/CetY6Y4">
              <Translation id="page-contributing-translation-program-acknowledgements-how-to-claim-1-discord" />
            </Link>
          </li>
          <li>
            <Translation id="page-contributing-translation-program-acknowledgements-how-to-claim-2" />
          </li>
          <li>
            <Translation id="page-contributing-translation-program-acknowledgements-how-to-claim-3" />
          </li>
          <li>
            <Translation id="page-contributing-translation-program-acknowledgements-how-to-claim-4" />
          </li>
        </ol>
        <p>
          <Translation id="page-contributing-translation-program-acknowledgements-4" />
        </p>
      </Content>
      <Content>
        <FeedbackCard />
      </Content>
    </Page>
  )
}

export default TranslatorAcknowledgements

export const query = graphql`
  query TranslatorAcknowledgementsPage($languagesToFetch: [String!]!) {
    locales: allLocale(filter: { language: { in: $languagesToFetch } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    dogeComputer: file(relativePath: { eq: "doge-computer.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 500
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    lightThemeCertificate: file(
      relativePath: { eq: "certificates/light-certificate.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    darkThemeCertificate: file(
      relativePath: { eq: "certificates/dark-certificate.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    ethereum: file(relativePath: { eq: "what-is-ethereum.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 220
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    allTimeData: alltimeJson {
      data {
        user {
          totalCosts
          username
          fullName
          avatarUrl
        }
        languages {
          language {
            totalCosts
            name
          }
        }
      }
    }
    quarterData: quarterJson {
      data {
        user {
          totalCosts
          username
          fullName
          avatarUrl
        }
        languages {
          language {
            totalCosts
            name
          }
        }
      }
    }
    monthData: monthJson {
      data {
        user {
          totalCosts
          username
          fullName
          avatarUrl
        }
        languages {
          language {
            totalCosts
            name
          }
        }
      }
    }
  }
`
