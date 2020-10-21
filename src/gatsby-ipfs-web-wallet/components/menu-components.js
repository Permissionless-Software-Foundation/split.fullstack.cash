/*
  This file is how you add new menu items to your site. It uses the Gatsby
  concept of Component Shadowing:
  https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/

  It over-rides he default file in the gatsby-ipfs-web-wallet Theme.
*/

import React from 'react'
import { Sidebar } from 'adminlte-2-react'

// TX History Plugin.
// This is an example of an external plugin for the wallet. It's a modular
// approach to sharing 'lego blocks' between wallet apps.
// import TXHistory from 'gatsby-plugin-bch-tx-history/src/components/txhistory'
// import TXHistory from 'gatsby-plugin-bch-tx-history'
import BCHSplit from 'gatsby-plugin-bch-split'

// Default components from gatsby-ipfs-web-wallet.
import Wallet from 'gatsby-ipfs-web-wallet/src/components/admin-lte/wallet'
import Tokens from 'gatsby-ipfs-web-wallet/src/components/admin-lte/tokens'
import Configure from 'gatsby-ipfs-web-wallet/src/components/admin-lte/configure'
import SendReceive from 'gatsby-ipfs-web-wallet/src/components/admin-lte/send-receive'

const { Item } = Sidebar

const MenuComponents = props => {
  return [
    {
      active: true,
      key: 'Split',
      component: <BCHSplit key='Split' {...props} />,
      menuItem: (
        <Item icon='fas-cog' key='Split' text='Split' />
      )
    },
    {
      key: 'Tokens',
      component: <Tokens key='Tokens' {...props} />,
      menuItem: <Item icon='fas-coins' key='Tokens' text='Tokens' />
    },
    {
      key: 'Send/Receive BCH',
      component: <SendReceive key='Send/Receive BCH' {...props} />,
      menuItem: (
        <Item
          icon='fa-exchange-alt'
          key='Send/Receive BCH'
          text='Send/Receive BCH'
        />
      )
    },
    {
      key: 'Wallet',
      component: <Wallet key='Wallet' {...props} />,
      menuItem: <Item icon='fa-wallet' key='Wallet' text='Wallet' />
    },
    {
      key: 'Configure',
      component: <Configure key='Configure' {...props} />,
      menuItem: <Item icon='fas-cog' key='Configure' text='Configure' />
    }
  ]
}

export default MenuComponents
