import webDevelopment from '../../../../src/images/webDevelopment.svg';
import appDevelopment from '../../../../src/images/app.svg';
import ecommerceImage from '../../../../src/images/Ecommerce.svg';
import blockchain from '../../../../src/images/blockchain.svg';
import gameDevelopment from '../../../../src/images/gamedevelopment.svg';
import salesforce from '../../../../src/images/salesforce.svg';
import ai from '../../../../src/images/Ai.svg';
import iot from '../../../../src/images/Iot.svg';
import devops from '../../../../src/images/devOps.svg';


import { AlexaSkills, AndroidICon, AppleIcon, AugmentedReality, Aws, Azure, Bigcommerce, BusinessInteligence, CakePhp, CasualGames, DataAnalytics, DataForcasting, DC, Digital_ocean, Drupal, EmbededSoftware, Ethereum, FlutterIcon, Google_cloud, Hyperledger, IonicIcon, IotApps, IotDashboard, IotHardware, KotlinIcon, LaravelIcon, Magento, Metaverse, NaturalLanguage, NFTMarket, PhpIcon, Prestashop, PrivateBlockchain, ReactNative, Saleforce, SmartContract, TextToSpeach, Ubercart, Unity3d, VirtualReality, Virtuemart, Wordpress } from '@/svg'


export const SERVICES_DATA = [
    {
      image: appDevelopment,
      title: 'App Development',
      link:'/app-development',
      tecList: [
        {
          icon: <AndroidICon/>,
          text: 'Android App',
        },
        {
          icon: <AppleIcon />,
          text: 'iOS App'
        },
        {
          icon: <FlutterIcon />,
          text: 'Flutter'
        },
        {
          icon: <ReactNative />,
          text: 'React Native'
        },
        {
          icon: <KotlinIcon />,
          text: 'Kotlin'
        },
        {
          icon: <IonicIcon />,
          text: 'Ionic'
        }
      ]
    },
    {
      image: webDevelopment,
      title: 'Web Development',
      link:'/web-development',

      tecList: [
        {
          icon: <PhpIcon />,
          text: 'PHP'
        },
        {
          icon: <Wordpress />,
          text: 'WordPress'
        },
        {
          icon: <Drupal />,
          text: 'Drupal'
        },
        {
          icon: <CakePhp />,
          text: 'CakePHP'
        },
        {
          icon: <LaravelIcon />,
          text: 'Laravel'
        },
      ]
    },
    {
      image: ecommerceImage,
      title: 'Ecommerce Development',
      link:'/ecommerce-dev',

      tecList: [
        {
          icon: <Magento />,
          text: 'Magento'
        },
        {
          icon: <Bigcommerce />,
          text: 'Bigcommerce'
        },
        {
          icon: <Ubercart />,
          text: 'Ubercart'
        },
        {
          icon: <Prestashop />,
          text: 'Prestashop'
        },
        {
          icon: <Virtuemart />,
          text: 'Virtuemart'
        }
      ]
    },
    {
      image: blockchain,
      title: 'Blockchain Development',
      link:'/blockchain-development',

      tecList: [
        {
          icon: <Ethereum />,
          text: 'Ethereum'
        },
        {
          icon: <Hyperledger />,
          text: 'Hyperledger'
        },
        {
          icon: <SmartContract />,
          text: 'Smart Contracts'
        },
        {
          icon: <PrivateBlockchain />,
          text: 'Private Blockchains'
        },
        {
          icon: <NFTMarket />,
          text: 'NFT Marketplace'
        }
      ]
    },
    {
      image: gameDevelopment,
      title: 'Game Development',
      link:'/game-development',

      tecList: [
        {
          icon: <Unity3d />,
          text: 'Unity 3d'
        },
        {
          icon: <AugmentedReality />,
          text: 'Augmented Reality'
        },
        {
          icon: <VirtualReality />,
          text: 'Virtual Reality'
        },
        {
          icon: <CasualGames />,
          text: 'Casual Games'
        },
        {
          icon: <Metaverse />,
          text: 'Metaverse'
        }
      ]
    },
    {
      image: salesforce,
      title: 'Salesforce Solutions',
      link:'/salesforce-development',

      tecList: [
        {
          icon: <Saleforce />,
          text: 'Salesforce Development'
        },
        {
          icon: <Saleforce />,
          text: 'Salesforce Consulting'
        },
        {
          icon: <Saleforce />,
          text: 'Salesforce Implementation'
        }
      ]
    },
    {
      image: ai,
      title: 'AI & ML',
      link:'/ai-development',

      tecList: [
        {
          icon: <TextToSpeach />,
          text: 'Text To Speech'
        },
        {
          icon: <BusinessInteligence />,
          text: 'Business Intelligence'
        },
        {
          icon: <DataForcasting />,
          text: 'Data Forecasting'
        },
        {
          icon: <NaturalLanguage />,
          text: 'Natural Language Processing'
        },
        {
          icon: <DataAnalytics />,
          text: 'Data Analytics'
        },
        {
          icon: <AlexaSkills />,
          text: 'Alexa Skills Development'
        }
      ]
    },
    {
      image: iot,
      title: 'IoT & Embedded',
      link:'/iot-development',

      tecList: [
        {
          icon: <IotApps />,
          text: 'IoT Apps'
        },
        {
          icon: <EmbededSoftware />,
          text: 'Embedded Software'
        },
        {
          icon: <IotHardware />,
          text: 'IoT Hardware Prototyping'
        },
        {
          icon: <IotDashboard />,
          text: 'IoT Dashboard and Analytics'
        }
      ]
    },
    {
      image: devops,
      title: 'Devops',
      link:'/devops',

      tecList: [
        {
          icon: <Aws />,
          text: 'AWS'
        },
        {
          icon: <Azure />,
          text: 'Azure'
        },
        {
          icon: <DC />,
          text: 'DC/OC'
        },
        {
          icon: <Digital_ocean />,
          text: 'Digital Ocean'
        },
        {
          icon: <Google_cloud />,
          text: 'Google Cloud'
        }
      ]
    },
  ]