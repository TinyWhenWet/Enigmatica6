onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mekanism/';

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'mekanism:fuelwood_heater',
            pattern: ['BAB', 'CDC', 'BAB'],
            key: {
                A: '#forge:plates/copper',
                B: 'engineersdecor:clinker_brick_block',
                C: 'environmental:kiln',
                D: 'thermal:machine_frame'
            },
            id: 'mekanism:fuelwood_heater'
        },
        {
            output: 'mekanism:resistive_heater',
            pattern: ['BEB', 'CDC', 'BAB'],
            key: {
                A: '#forge:circuits/advanced',
                B: 'engineersdecor:clinker_brick_block',
                C: 'immersiveengineering:coil_hv',
                D: '#industrialforegoing:machine_frame/simple',
                E: 'pneumaticcraft:heat_sink'
            },
            id: 'mekanism:resistive_heater'
        },
        {
            output: 'mekanism:thermal_evaporation_controller',
            pattern: ['AAA', 'BCD', 'AAA'],
            key: {
                A: 'mekanism:thermal_evaporation_block',
                B: '#forge:circuits/elite',
                C: '#industrialforegoing:machine_frame/advanced',
                D: 'rftoolsbase:tablet'
            },
            id: 'mekanism:thermal_evaporation/controller'
        },
        {
            output: Item.of('2x mekanism:thermal_evaporation_block'),
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: '#forge:plates/bronze',
                B: 'pneumaticcraft:heat_pipe',
                C: 'immersiveengineering:alloybrick',
                D: '#mekanism:alloys/reinforced'
            },
            id: 'mekanism:thermal_evaporation/block'
        },
        {
            output: 'mekanism:thermal_evaporation_valve',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mekanism:thermal_evaporation_block',
                B: 'create:copper_valve_handle',
                C: 'create:fluid_pipe',
                D: 'create:fluid_valve',
                E: '#forge:circuits/elite'
            },
            id: 'mekanism:thermal_evaporation/valve'
        },
        {
            output: Item.of('3x mekanism:structural_glass'),
            pattern: ['ABC', 'BCB', 'CBA'],
            key: {
                A: '#mekanism:alloys/reinforced',
                B: '#forge:plates/aluminum',
                C: '#thermal:glass/hardened'
            },
            id: 'mekanism:structural_glass'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
