import PortfolioImg from '@/public/images/portfolio-img.jpg';
import PortfolioImgWide from '@/public/images/portfolio-img-wide.jpg';
import PortfolioImg2 from '@/public/images/portfolio-img@2x.jpg';
import PortfolioImg3 from '@/public/images/pet-2.jpg';
import NegomboImg from '@/public/images/negombo.png';
import NegomboImg1 from '@/public/images/negombo-1.png';
import NegomboImg2 from '@/public/images/negombo-2.png';
import NegomboImg3 from '@/public/images/negombo-3.png';
import NegomboImg4 from '@/public/images/negombo-4.png';
import RSSImg from '@/public/images/rss.png';
import RSSImg1 from '@/public/images/rss-1.png';
import RSSImg2 from '@/public/images/rss-2.png';
import RSSImg3 from '@/public/images/rss-3.png';
import RSSImg4 from '@/public/images/rss-4.png';


export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "Recent",
        title2Span: "Works",
    
    },
    projects: [
        
        {
            title: 'Negombo Park',
            slug: 'second',
            description: '',
            services: [
                { name: 'PHP Laravel' },
                { name: 'XAMPP' },
                { name: 'React' },
                { name: ' NodeJS' }
            ],
            client: 'FlaTheme',
            projectLink: {
                title: 'Website Link',
                url: 'https://www.prenotazioni.negombo.it'
            },
            duration: '6+ months',
            content: 'Negombo is a web application that allows clients to book a place on the resort of Negombo. This website was created during my work in "Extramus".  As a user, you can choose a place and a spot on the map, enter all your personal information, and pay to confirm the booking. Emails will be sent to both the customer and the admins. There is also an admin panel that allows for various management tasks such as managing places on the map, handling bookings (by editing or removing them), adding promo codes, managing staff, seasons, holidays, and prices. Additionally, there is a frequently Asked Questions page. On the booking management page, there is an important feature: multiple bookings. It allows the admin to make one booking for multiple places. The rest of the booking process is the same as on the user panel. Admins can also book using the user interface; the payment page won’t be shown, but the booking will still be registered in the database. All pages (user and admin interfaces) can be displayed in Italian or English.',
            mainImage: NegomboImg,
            mainImageWide: NegomboImg2,
            images: [
                { image: NegomboImg1 },
                { image: NegomboImg3 },
                { image: NegomboImg4 },
            ],
            categories: [
                { name: 'PHP Laravel' },
                { name: 'XAMPP' },
                { name: 'React' },
                { name: ' NodeJS' }
            ],
        },
        {
            title: 'RSS Feed Management Tool',
            slug: 'third',
            description: 'The Article Management System is a Next.js application for managing and displaying articles.',
            services: [
                { name: 'PostgreSQL' },
                { name: 'Next.js' },
                { name: 'Tailwind' },
                { name: 'Prisma' },
            ],

            projectLink: {
                title: 'Project GitHub',
                url: 'https://github.com/Mariiablvnk/article-management'
            },
            duration: '2 days',
            content: 'The Article Management System is a Next.js application for managing and displaying articles. It includes functionalities for creating, deleting, sorting, reading, and updating articles, and uses modern technologies such as TypeScript, Prisma, and Tailwind CSS.',
            mainImage: RSSImg,
            mainImageWide: RSSImg1,
            images: [
                { image: RSSImg2 },
                { image: RSSImg4 },
            ],
            categories: [
                { name: 'PostgreSQL' },
                { name: 'Next.js' },
                { name: 'Tailwind' },
                { name: 'Prisma' },
            ],
        },
        {
            title: 'Animal Shelter Website',
            slug: 'first',
            description: 'Landing page for Ukrainian Animal Shelter.',
            services: [
                { name: 'Angular' },
                { name: 'NodeJS' },
                { name: 'TypeScript' },
            ],
            
            projectLink: {
                title: 'Project GitHub',
                url: 'https://github.com/Mariiablvnk/Pet-project'
            },
            duration: '1 day',
            content: 'This is my first Angular project, SPA for Ukrainian animal shelter in Poltava. The website consists of the main page, page with pet`s photo and description, contacts page.',
            mainImage: PortfolioImg,
            mainImageWide: PortfolioImg,
            images: [
                
                { image: PortfolioImgWide },
                { image: PortfolioImg2 },
                
            ],
            categories: [
                { name: 'Angular' },
                { name: 'NodeJS' },
                { name: 'TypeScript' },
            ],
        },
    ]
};