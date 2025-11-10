import "./globals.css";
import {ReactElement} from "react";
import {ThemeSwitcher} from "del/components/ThemeSwitcher";
import {MobileMenu} from "del/components/MobileMenu";
import {TopMenu} from "del/components/TopMenu";
import {Metadata} from "next";
import {Providers} from "del/app/Providers";

const comment = `
<!--
                   #                         #           #                           #                                  ###             #          
 #:  :#            #                                #    #                           #                    ####:           #                        
 ##  ##            #                                #    #            :##  #:        #                    #  :#.          #                        
 ##..## .###.   ## #   ###         #.    # ###    #####  #:##:        #######        # ##   #.  #         #   :#  ###     #   #.    # ###    #:##: 
 #:  :# #: :#  #   #     :#         :   :#   #      #    #  :#        #######        #   #   : :          #    #    :#    #    :   :#   #    #  :# 
 # ## #     #  #   #  #   #        .# # #:   #      #    #   #        :######        #   #  :# #:         #    # #   #    #   .# # #:   #    #   # 
 # #  # :####  #   #  #####         #:#:#    #      #    #   #         #####         #   #   # #          #    # #####    #    #:#:#    #    #   # 
 #    # #:  #  #   #  #             #####    #      #    #   #          ###          #   #   #            #   :# #        #    #####    #    #   # 
 #    # #.  #  #   #      #         :#:#:    #      #.   #   #           #.          #   #    #:          #  :#.     #    #.   :#:#:    #    #   # 
 #    # :##:#   ## #   ###:          # #   #####    :##  #   #                       # ##    :#           ####:   ###:    :##   # #   #####  #   # 
                                                                                             :#                                                    
                                                                                             #:                                                    
                                                                                            ##                                                     
-->`

export const metadata: Metadata = {
    title: {
        template: '%s - Delwin444',
        default: 'Portfolio - Delwin444',
    },
    description: 'Portfolio Seite eines Full-Stack Entwicklers aus dem Raum Leipzig'

}

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>): ReactElement {
    return (
        <html lang="de" suppressHydrationWarning>
        <body className={`antialiased`}>
        <Providers>
            <TopMenu/>
            <ThemeSwitcher/>
            <main>{children}</main>
            <MobileMenu/>
            <span dangerouslySetInnerHTML={{__html: comment}}></span>
        </Providers>
        </body>
        </html>
    );
}
