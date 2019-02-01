import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition(`IncidentPage => HomePage,
                StatisticsPage => IncidentPage,
                iCarePage => StatisticsPage,
                EventsPage => iCarePage,
                SponsorsPage => EventsPage,
                AboutPage => SponsorsPage,
                ContactUsPage => AboutPage,
                ContactUsPage => HomePage`, [
    /* order */
    /* 1 */ query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
    /* 2 */ group([  // block executes in parallel
            query(':enter', [
                    style({ transform: 'translateY(-100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateY(-0%)' }))
                ], { optional: true }),
            query(':leave', [
                    style({ transform: 'translateY(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateY(+100%)' }))
                ], { optional: true })
            ])
    ]),
    transition(`HomePage => IncidentPage,
                IncidentPage => StatisticsPage,
                StatisticsPage => iCarePage,
                iCarePage => EventsPage,
                EventsPage => SponsorsPage,
                SponsorsPage => AboutPage,
                AboutPage => ContactUsPage`, [
        /* order */
        /* 1 */ query(':enter, :leave',
                    style({ position: 'fixed', width: '100%' }),
                    { optional: true }),
        /* 2 */ group([  // block executes in parallel
                query(':enter', [
                        style({ transform: 'translateY(100%)' }),
                        animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
                    ], { optional: true }),
                query(':leave', [
                        style({
                            bottom: '0',
                            transform: 'translateY(0%)'
                        }),
                        animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
                    ], { optional: true })
                ])
        ])
]
);
