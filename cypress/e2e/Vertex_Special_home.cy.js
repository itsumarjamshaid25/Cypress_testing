//we can run test case in cypress pplication 
//2 in terminal
//3 default browser is electron if you want to change it 
//4 npx cypress run --browser nmae --headed to open test in specific brower 
//5 npx cypress run used to run in terminal 
//6 npx cypress run --headed to open defualt brwser and run 
//7 its run all the instant changes   

describe('Home page', ()=>{
    it('navigation check',()=>
    {
        cy.visit("https://vertexspecial.com/")
       
        //cy.title().should('eq','Vertex Special Technologies') //here thi is used for assertion 
       
         
    })
    it('check  side bar ', ()=>{
        cy.visit("https://vertexspecial.com/")
       

        cy.get(".bar-line").click()
    })
    it('check fb link ', ()=>{
        cy.visit("https://vertexspecial.com/")
        cy.get(".bar-line").click()

        cy.get("div[class='sidebars-wrappers home-21 active'] li:nth-child(1) a:nth-child(1)").click()
    })


})