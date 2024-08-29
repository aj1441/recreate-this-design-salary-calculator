const federalTaxRate = 22.00;

const stateIncomeTaxRates = [
    { state: "Alabama", rate: 5.00 + federalTaxRate },
    { state: "Alaska", rate: 0.00 + federalTaxRate },  // No state income tax
    { state: "Arizona", rate: 4.54 + federalTaxRate },
    { state: "Arkansas", rate: 5.90 + federalTaxRate },
    { state: "California", rate: 9.30 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Colorado", rate: 4.40 + federalTaxRate },
    { state: "Connecticut", rate: 5.50 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Delaware", rate: 5.55 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Florida", rate: 0.00 + federalTaxRate },  // No state income tax
    { state: "Georgia", rate: 5.75 + federalTaxRate },
    { state: "Hawaii", rate: 8.25 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Idaho", rate: 6.00 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Illinois", rate: 4.95 + federalTaxRate },
    { state: "Indiana", rate: 3.23 + federalTaxRate },
    { state: "Iowa", rate: 6.00 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Kansas", rate: 5.70 + federalTaxRate },
    { state: "Kentucky", rate: 5.00 + federalTaxRate },
    { state: "Louisiana", rate: 5.00 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Maine", rate: 6.75 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Maryland", rate: 4.75 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Massachusetts", rate: 5.00 + federalTaxRate },
    { state: "Michigan", rate: 4.25 + federalTaxRate },
    { state: "Minnesota", rate: 7.05 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Mississippi", rate: 5.00 + federalTaxRate },
    { state: "Missouri", rate: 5.40 + federalTaxRate },
    { state: "Montana", rate: 6.75 + federalTaxRate },
    { state: "Nebraska", rate: 5.01 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "Nevada", rate: 0.00 + federalTaxRate },  // No state income tax
    { state: "New Hampshire", rate: 0.00 + federalTaxRate },  // No state income tax (only on dividends and interest)
    { state: "New Jersey", rate: 6.37 + federalTaxRate },  // Adjusted for the applicable income range
    { state: "New Mexico", rate: 4.90 + federalTaxRate },  // Adjusted for the applic
]

export default stateIncomeTaxRates;
