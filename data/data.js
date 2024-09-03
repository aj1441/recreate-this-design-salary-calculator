const federalTaxRate = .22;

const stateIncomeTaxRates = [
    { state: "Alabama", rate: .5 + federalTaxRate },
    { state: "Alaska", rate: 0.00 + federalTaxRate },  // No state income tax
    { state: "Arizona", rate: .45 + federalTaxRate },
    { state: "Arkansas", rate: .59 + federalTaxRate },
    { state: "California", rate: .93 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Colorado", rate: .44 + federalTaxRate },
    { state: "Connecticut", rate: .55 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Delaware", rate: .55 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Florida", rate: 0.00 + federalTaxRate },  // No state income tax
    { state: "Georgia", rate: .56 + federalTaxRate },
    { state: "Hawaii", rate: .83 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Idaho", rate: .6 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Illinois", rate: .5 + federalTaxRate },
    { state: "Indiana", rate: .32 + federalTaxRate },
    { state: "Iowa", rate: .6 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Kansas", rate: .57 + federalTaxRate },
    { state: "Kentucky", rate: .50 + federalTaxRate },
    { state: "Louisiana", rate: .50 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Maine", rate: .68 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Maryland", rate: .48 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Massachusetts", rate: .50 + federalTaxRate },
    { state: "Michigan", rate: .43 + federalTaxRate },
    { state: "Minnesota", rate: .71 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Mississippi", rate: .5 + federalTaxRate },
    { state: "Missouri", rate: .54 + federalTaxRate },
    { state: "Montana", rate: .68 + federalTaxRate },
    { state: "Nebraska", rate: .50 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Nevada", rate: 0.00 + federalTaxRate },  // No state income tax
    { state: "New Hampshire", rate: 0.00 + federalTaxRate },  // No state income tax (only on dividends and interest)
    { state: "New Jersey", rate: .64 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "New Mexico", rate: .50 + federalTaxRate },  // Adjusted for the applic
]

export default stateIncomeTaxRates;
