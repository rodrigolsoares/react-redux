import React, {Component} from 'react'

import Grid from '../common/layout/grid'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

export default({credits,debts}) => (

    <Grid cols='12'>

        <legend>Resumo</legend>

        <Row>
            <ValueBox cols='12 4' color='green' icon='bank'
                      value={`R$ ${credits}`} text='Total de Créditos' />
            
            <ValueBox cols='12 4' color='red' icon='credit-car'
                      value={`R$ ${debts}`} text='Total de Débitos' />

            <ValueBox cols='12 4' color='blue' icon='money'
                      value={`R$ ${credits - debts}`} text='Valor consolidado' />

            
        </Row>

    </Grid>

)