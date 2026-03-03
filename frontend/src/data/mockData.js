import { CreditCard, Landmark, ShieldCheck, Wrench, DollarSign, TrendingUp, BarChart, Target, RefreshCw, Clock, FileText, Users, Briefcase, Building2, HandCoins, PiggyBank } from 'lucide-react';

export const services = [
  {
    id: 'lines-of-credit',
    title: 'Lines of Credit',
    description: 'Flexible revolving capital you can draw on anytime — perfect for inventory, payroll, or bridging cash flow gaps.',
    icon: CreditCard,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'bank-term-loans',
    title: 'Bank Term Loans',
    description: 'Fixed, affordable payments backed by banks — ideal for expansion, refinancing, or strategic investment.',
    icon: Landmark,
    color: 'bg-pink-100 text-pink-500',
  },
  {
    id: 'sba-loans',
    title: 'SBA Loans',
    description: 'Government-backed financing with extended terms and competitive rates for long-term business growth.',
    icon: ShieldCheck,
    color: 'bg-indigo-100 text-navy-900',
  },
  {
    id: 'equipment-financing',
    title: 'Equipment Financing',
    description: 'Acquire or replace essential tools and machinery with up to 100% financing tailored to your budget.',
    icon: Wrench,
    color: 'bg-purple-100 text-purple-600',
  },
];

export const partners = [
  "SBA", "FDIC", "Fannie Mae", "US Treasury", "CDFI Fund", "Small Business"
];

export const insights = [
  {
    id: 'restaurant-expansion',
    title: 'How a family restaurant secured $350K to open their second location',
    date: '18 November 2025',
    category: 'Restaurant',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'construction-turnaround',
    title: 'Construction firm eliminated $23K in monthly MCA payments with debt restructuring',
    date: '4 October 2025',
    category: 'Construction',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'logistics-growth',
    title: 'Logistics company funded $500K in working capital after 6 months of rejection',
    date: '22 September 2025',
    category: 'Logistics',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'retail-equipment',
    title: 'Retail chain upgraded all store equipment with zero upfront cost',
    date: '8 August 2025',
    category: 'Retail',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
  }
];

export const serviceData = {
  'lines-of-credit': {
    id: 'lines-of-credit',
    layout: 'standard',
    heroTitle: 'Lines of Credit',
    heroDescription: 'Keep your business ready with revolving capital you can use anytime. Stay ahead of cash flow challenges with flexible credit that replenishes as you repay.',
    experienceTitle: 'Flexible funding that grows with you',
    experienceDescription: 'Our lines of credit are designed for businesses that need ongoing access to working capital. Whether you are covering seasonal fluctuations, managing payroll, or seizing unexpected opportunities, a revolving credit line gives you the financial agility to act fast.',
    experienceDescription2: 'Unlike traditional loans, you only pay interest on what you use. As you repay, your available credit replenishes — giving you a perpetual safety net that scales alongside your business.',
    features: [
      { title: 'Revolving Access', description: 'Draw funds as needed and replenish your credit line as you repay. Your capital is always ready when opportunity knocks.', icon: RefreshCw },
      { title: 'Competitive Rates', description: 'Interest-only and prime-plus rates keep your borrowing costs low while maintaining maximum financial flexibility.', icon: DollarSign },
      { title: 'Fast Approval', description: 'Our streamlined process gets you approved quickly so you can focus on running your business, not waiting on paperwork.', icon: Clock }
    ],
    uniqueTitle: 'Capital on your terms',
    uniqueDescription: 'With loan amounts from $25,000 to $1,000,000+ and 12-18 month terms, our lines of credit are built for businesses that need reliable, flexible access to funds without the rigid structure of a traditional loan.',
    uniqueDescription2: 'Perpetually revolving with responsible use, our credit lines reward good financial management with growing access to the capital you need.'
  },
  'bank-term-loans': {
    id: 'bank-term-loans',
    layout: 'process',
    heroTitle: 'Bank Term Loans',
    heroDescription: 'Access the capital you need to grow with fixed, affordable payments. Expand, refinance, or invest with confidence through our bank-backed lending solutions.',
    experienceTitle: 'Predictable payments, proven results',
    experienceDescription: 'Our bank-backed term loans deliver fast approvals, transparent terms, and predictable payments that fit your goals. With loan amounts from $25,000 to $10,000,000+ and interest rates starting at 9%, we connect you with the capital to make big moves.',
    experienceDescription2: 'Whether you are expanding to a new location, purchasing commercial real estate, or refinancing existing debt, our term loans offer the stability and affordability that high-cost alternatives simply cannot match.',
    steps: [
      { number: '01', title: 'Apply Online', description: 'Complete our simple application in minutes. Our technology quickly identifies the best financing options for your needs.' },
      { number: '02', title: 'Compare Options', description: 'Review tailored funding options side-by-side. Take your time to choose the best fit for your business goals and budget.' },
      { number: '03', title: 'Get Funded', description: 'Connect with a dedicated consultant, finalize terms, and receive your capital — often within days, not weeks.' }
    ],
    features: [
      { title: 'Flexible Terms', description: 'Payback terms from 2 to 15 years give you the breathing room to grow without the pressure of short-term repayment schedules.', icon: Clock },
      { title: 'High Loan Amounts', description: 'Secure funding from $25,000 up to $10,000,000+ to tackle projects of any size — from small renovations to major expansions.', icon: BarChart },
      { title: 'Transparent Pricing', description: 'No hidden fees or surprises. Our bank-backed loans come with clear terms and fixed payments you can plan around.', icon: FileText }
    ],
    uniqueTitle: 'Banking relationships that deliver',
    uniqueDescription: 'We maintain deep relationships with a network of banks and lending institutions, allowing us to match your business with the most competitive rates and terms available in the market.',
    uniqueDescription2: 'Our team guides you through every step — from application to funding — ensuring a smooth, transparent process that puts your business goals first.'
  },
  'sba-loans': {
    id: 'sba-loans',
    layout: 'feature-rows',
    heroTitle: 'SBA Loans',
    heroDescription: 'Secure long-term, low-rate funding backed by the U.S. Small Business Administration. Perfect for expansion, refinancing, or working capital with guidance every step of the way.',
    experienceTitle: 'Government-backed confidence',
    experienceDescription: 'SBA loans offer some of the most favorable terms available to small businesses — extended repayment periods of 10 to 25 years, competitive interest rates from 10.25% to 16%, and loan amounts from $50,000 to $5,000,000.',
    experienceDescription2: 'Our experienced team navigates the SBA application process for you, handling the complexity so you can focus on your business. We have successfully guided hundreds of businesses through SBA 7(a) and 504 loan programs.',
    features: [
      { title: 'Extended Repayment Terms', description: 'With repayment terms of 10 to 25 years, SBA loans offer the lowest monthly payments of any business financing option available.', icon: Clock },
      { title: 'Competitive Interest Rates', description: 'Government backing means lenders can offer rates from 10.25% to 16% — significantly lower than most alternative lending products.', icon: TrendingUp },
      { title: 'Versatile Use of Funds', description: 'Use SBA loan proceeds for working capital, equipment, real estate, debt refinancing, or virtually any legitimate business purpose.', icon: Briefcase }
    ],
    uniqueTitle: 'Your path to SBA funding',
    uniqueDescription: 'Many businesses think SBA loans are out of reach due to complex requirements. We simplify the process by pre-qualifying your business, preparing documentation, and matching you with the right SBA lender.',
    uniqueDescription2: 'For businesses currently burdened by high-cost MCA debt, we offer a proven pathway: restructure your existing obligations first, build your financial foundation, then transition to long-term SBA financing for sustainable growth.'
  },
  'equipment-financing': {
    id: 'equipment-financing',
    layout: 'impact',
    heroTitle: 'Equipment Financing',
    heroDescription: 'Upgrade your equipment without slowing down your cash flow. Acquire or replace essential tools and machinery with up to 100% financing and terms tailored to your budget.',
    experienceTitle: 'Keep operations moving forward',
    experienceDescription: 'Whether you need commercial vehicles, manufacturing machinery, restaurant equipment, or technology infrastructure, our equipment financing solutions let you acquire what you need without depleting your working capital.',
    experienceDescription2: 'With loan amounts up to $2,000,000+, repayment terms from 4 to 84 months, and offers of up to 100% financing, we make it simple to invest in the tools that drive your business forward.',
    stats: [
      { label: 'Max Financing', value: '100%' },
      { label: 'Funding Up To', value: '$2M+' },
      { label: 'Terms Up To', value: '84mo' }
    ],
    features: [
      { title: 'Preserve Working Capital', description: 'Finance up to 100% of your equipment cost, keeping your cash reserves intact for daily operations and unexpected expenses.', icon: PiggyBank },
      { title: 'Flexible Repayment', description: 'Choose terms from 4 to 84 months to align your payments with the equipment\'s useful life and your cash flow cycle.', icon: RefreshCw },
      { title: 'Fast Processing', description: 'Our streamlined application process means you can get approved and funded quickly — so your new equipment is working for you sooner.', icon: Clock }
    ],
    uniqueTitle: 'Equipment as collateral',
    uniqueDescription: 'Unlike unsecured loans, equipment financing uses the asset itself as collateral — often resulting in better rates and higher approval chances, even for newer businesses.',
    uniqueDescription2: 'From heavy machinery to point-of-sale systems, we finance equipment across every industry. Our specialists match you with the right lender and structure to maximize your investment.'
  }
};

export const insightData = {
  'restaurant-expansion': {
    id: 'restaurant-expansion',
    title: 'How a family restaurant secured $350K to open their second location',
    date: '18 November 2025',
    category: 'Restaurant',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "The Pantoja family had been running their beloved Mexican restaurant in downtown Tampa for eight years. With consistent revenue and a growing customer base, they knew it was time to expand — but traditional banks kept turning them down.",
      sections: [
        {
          heading: "The Challenge: Banks Said No",
          body: "Despite strong monthly revenue of $85,000 and excellent customer reviews, the Pantojas were rejected by three banks. The reasons varied — insufficient collateral, limited credit history, too much existing debt from an older MCA advance they had taken during COVID."
        },
        {
          heading: "The Solution: SBA Loan with Debt Restructuring",
          body: "HCA Finance first helped the family restructure their existing MCA obligation, reducing their monthly payments by 60%. Once their cash flow stabilized, we guided them through an SBA 7(a) application. Within 45 days, they were approved for $350,000 at 11.5% over 15 years."
        },
        {
          heading: "The Result: A Second Location Thriving",
          body: "Six months later, Pantoja's Kitchen opened its second location in St. Petersburg. The new restaurant hit profitability in its third month and now generates an additional $120,000 in monthly revenue. The family is already planning location number three."
        }
      ],
      conclusion: "The Pantoja family's story shows that the right financing partner makes all the difference. At HCA Finance, we don't just fund businesses — we help them build the foundation for lasting success."
    }
  },
  'construction-turnaround': {
    id: 'construction-turnaround',
    title: 'Construction firm eliminated $23K in monthly MCA payments with debt restructuring',
    date: '4 October 2025',
    category: 'Construction',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "Jon C., the owner of a mid-size transportation and logistics company in New Jersey, was drowning in multiple MCA advances. Daily withdrawals were crippling his cash flow, making it impossible to take on new contracts or even cover basic operating expenses.",
      sections: [
        {
          heading: "Trapped in the MCA Cycle",
          body: "Like many business owners, Jon had turned to merchant cash advances during a period of rapid growth. What started as one advance quickly became three, with daily withdrawals totaling over $1,100 per day — more than $23,000 per month — eating into every dollar his company earned."
        },
        {
          heading: "Breaking Free with Debt Restructuring",
          body: "HCA Finance consolidated Jon's three MCA obligations into a single, manageable monthly payment. By replacing daily withdrawals with a fixed monthly structure, his effective payment dropped by over 65%. The restructuring also improved his business credit profile significantly."
        },
        {
          heading: "From Surviving to Thriving",
          body: "With the extra cash flow, Jon was able to hire two additional drivers, purchase a new truck through our equipment financing program, and take on three major contracts he had previously been forced to decline. His revenue grew by 40% in the following quarter."
        }
      ],
      conclusion: "\"Our expenses dropped by $23,000 a month, and now we have the funds to grow! I couldn't have done this without HCA Finance.\" — Jon C., Owner"
    }
  },
  'logistics-growth': {
    id: 'logistics-growth',
    title: 'Logistics company funded $500K in working capital after 6 months of rejection',
    date: '22 September 2025',
    category: 'Logistics',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "Andrea M. had spent six frustrating months being turned away by every lender she approached. Her construction firm was winning contracts left and right, but without working capital to fund materials and labor upfront, she was watching opportunities slip away.",
      sections: [
        {
          heading: "The Working Capital Gap",
          body: "Andrea's firm had $2.3 million in signed contracts but needed $500,000 in working capital to execute them. Traditional banks wanted two years of tax returns she didn't have (the business was 18 months old), and alternative lenders quoted rates that would have consumed her margins entirely."
        },
        {
          heading: "A Custom Bank Term Loan Solution",
          body: "HCA Finance connected Andrea with a bank lending partner that specialized in contract-based lending. Using her signed contracts as supporting documentation alongside her strong receivables, we secured a $500,000 bank term loan at 12% over 5 years within just two weeks."
        },
        {
          heading: "Contracts Executed, Growth Unlocked",
          body: "With capital in hand, Andrea's team mobilized on all pending contracts simultaneously. Within 90 days, the firm collected over $800,000 in receivables, fully justifying the investment. Andrea has since returned for a line of credit to ensure she never misses a bid again."
        }
      ],
      conclusion: "\"We've been looking for funding for half a year and only HCA Finance provided us the working capital we needed in just 2 weeks!\" — Andrea M., Owner"
    }
  },
  'retail-equipment': {
    id: 'retail-equipment',
    title: 'Retail chain upgraded all store equipment with zero upfront cost',
    date: '8 August 2025',
    category: 'Retail',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    content: {
      introduction: "Cristian S. owned a growing chain of three jewelry stores across South Florida. His aging point-of-sale systems, display cases, and security equipment were holding back the customer experience — but replacing everything across three locations seemed financially impossible.",
      sections: [
        {
          heading: "Outdated Equipment, Modern Ambitions",
          body: "The total cost to upgrade all three stores was estimated at $180,000. Cristian had been quoted personal loans at 24% APR and considered using credit cards. Both options would have strained his personal and business finances to the breaking point."
        },
        {
          heading: "100% Equipment Financing",
          body: "HCA Finance structured an equipment financing package that covered the full $180,000 with zero down payment. By using the equipment itself as collateral, Cristian secured a 60-month repayment term with monthly payments that were less than what he was spending on maintenance for his old systems."
        },
        {
          heading: "A Transformed Customer Experience",
          body: "New digital displays, modern POS systems, and upgraded security across all three locations increased foot traffic by 25% and average transaction value by 18%. The investment paid for itself within the first year through increased sales and reduced maintenance costs."
        }
      ],
      conclusion: "\"It was awesome to work with HCA Finance. I finally got the funds I needed for my business to stabilize, thank you!\" — Cristian S., Owner"
    }
  }
};
