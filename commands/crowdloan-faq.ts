const crowdloanFAQ = `
# Acala Crowdloan FAQ

## rewards-same
### Is the reward ratio the same across contribution methods?
Yes. The base ACA reward is the same regardless of how you participate.


## number-aca
### How many ACA will I receive for each DOT contributed?
The ACA to DOT ratio will be announced at a later time.


## minimum
### What is the minimum amount I can contribute?
The minimum contribution depends on how you participate. The minimum for Liquid Crowdloan Contribution is 1 DOT. The minimum for Direct Contribution and Partner Wallets is 5 DOT. Check with Exchanges to see their minimum requirements. 


## how-lcdot
### How does Liquid Crowdloan Contribution work? 
Select the Liquid Crowdloan option when making your contribution on the Acala website or Polkawallet. After the Acala network launches, you will receive your ACA rewards plus lcDOT. lcDOT will be issued on a 1:1 basis against your DOT contribution and can be redeemed for DOT on a 1:1 basis at Acala's parachain lease expiration. lcDOT allows you to access the liquidity in your crowdloan contribution because lcDOT can be used in Acala’s DeFi primitives (e.g., trade, transfer, collateralize). It's important to note that the Liquid Crowdloan option is not completely trustless. It requires you to contribute your DOT to the Liquid Crowdoan Vault managed by the Acala Foundation. This vault will be managed by the Acala Foundation until ownership of the vault is transferred to the Acala parachain. If you are looking for a way to trustlessly contribute, make a Direct Polkadot Contribution.


## risks-lcdot
### What are the risks of the Liquid Crowdloan Contribution method?
Contributors using this method need to trust the Acala Foundation to manage the Liquid Crowdloan Vault until Vault ownership is transferred to the Acala parachain. We do not foresee any technical risk with this approach.


## what-lcdot
### What is lcDOT?
Liquid Crowdloan DOT (lcDOT) represents the underlying DOT liquidity of an Acala Crowdloan DOT contribution. When a participant contributes DOT via the Liquid Crowdloan option, they will receive lcDOT, a liquid (unlocked) token available for use on Acala’s DeFi hub in addition to ACA rewards. lcDOT can be used to swap, collateralize for a self-serviced loan in aUSD stablecoin, and more. lcDOT is redeemable for DOT on a 1:1 basis at the end of Acala’s parachain lease.


## sell-lcdot
### What happens if I sell my lcDOT?
Contributors that made a Liquid Crowdloan Contribution must hold lcDOT at the end of the parachain lease in order to redeem their lcDOT for DOT. If these contributors no longer hold lcDOT, they won’t be able to redeem for DOT. However, selling lcDOT has no impact on ACA rewards. 


## wen-aca
### When will I receive my ACA tokens?
You will receive your ACA after Acala wins a parachain slot, launches the network, and enables token transfers.


## faq
### Where can I find the answer to my question?
You can find the answer to your qeustion by visiting https://wiki.acala.network/acala/acala-crowdloan/faq


## how-participate
### Where can I learn more about how to participate?
You can find more information by visiting https://wiki.acala.network/acala/acala-crowdloan/crowdloan-event


## ledger
### Can I use Ledger?
No. Do not use Ledger. Ledger does not support Acala and you won't be able to access your ACA tokens. We can not and will not help you get your ACA tokens if you use Ledger.

## quests-help
### How can I learn more about Acala Quests?
Visit https://wiki.acala.network/acala/acala-crowdloan/acala-quests to learn more and for troubleshooting help
`;

export default crowdloanFAQ;
