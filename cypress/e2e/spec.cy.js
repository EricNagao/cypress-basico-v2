describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://superpopular.bigconecta.com.br/WebEstabelecimentos/estlogin.aspx?ReturnUrl=%2fWebEstabelecimentos%2festprincipal.aspx')
    cy.get('#ctl00_ContentPlaceHolder1_txtLogin').type("10412")
    cy.get('#ctl00_ContentPlaceHolder1_txtSenha').type("10412")
    cy.get('#ctl00_ContentPlaceHolder1_btnEntrar').click("")
    cy.get('#ctl00_liAut > a').click("")
    cy.get('[href="esttrans.aspx"] > img').click("")
    cy.get('#ctl00_ContentPlaceHolder1_txtCartao').type("eric ma")
    cy.get('#ctl00_ContentPlaceHolder1_btnPesquisar').click("")
    cy.get('#ctl00_ContentPlaceHolder1_gvEncontrados_ctl02_btnSeleciona').click("")
    cy.get('#ctl00_ContentPlaceHolder1_txtCodBarras').type("7891058008192")
    cy.get('#ctl00_ContentPlaceHolder1_txtQuant').type("1")
    cy.get('#ctl00_ContentPlaceHolder1_txtPrecoFabrica').click("").invoke('val').as('valorCopiado')
    cy.get('#ctl00_ContentPlaceHolder1_txtValorUnitLiq').click("").as('elementoDestino')
    
    cy.get('@valorCopiado').then((valor)=>{
      cy.get('@elementoDestino').type(valor);
    })
  
    cy.get('#ctl00_ContentPlaceHolder1_btnAddProd').click("")
    cy.get('#ctl00_ContentPlaceHolder1_btnValidarProdutos').click("")

    cy.get('#ctl00_ContentPlaceHolder1_lblPontosTrans')
    .invoke('val')
    .then((ctl00_ContentPlaceHolder1_lblPontosTrans) => {
      if(ctl00_ContentPlaceHolder1_lblPontosTrans === 0){
        cy.log("Não gerou ponto").then((log)=>{
          const logText = log[0].message;
          fs.writeFileSync('Documents/log.txt',logText);
        })
      }else {
          cy.log("Gerou ponto")
      };
    })

  cy.get('#ctl00_ContentPlaceHolder1_btnCancelarProdutos').click("")  
  })
})