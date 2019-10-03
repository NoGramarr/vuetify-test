<template>
  <v-container>
    <v-layout
      align-center
      justify-center
      fill-height>
      <v-flex xs12 lg9 xl8>
        <v-card class="my-3 elevation-3">
          <v-card-title class="white--text primary body-1">
            <v-icon small left color="white">fas fa-info-circle</v-icon> product details
          </v-card-title>
          <v-divider/>
          <v-layout row class="pa-5">
            <v-flex xs12 sm6>
              <v-text-field class="ma-2" hide-details outlined filled label="supplier" append-icon="fas fa-plus" @click:append="logIt"></v-text-field>
              <v-select class="ma-2" hide-details outlined filled label="supplier status" :items="testValues"></v-select>
              <v-text-field class="ma-2" hide-details outlined filled label="pnr conf no"></v-text-field>
              <v-select class="ma-2" hide-details outlined filled label="product type"  :items="testValues"></v-select>
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <div class="text-center">
                    <v-btn small text v-on="on" style="width: 100%;">Options <v-icon small class="ml-2">fas fa-arrow-down</v-icon></v-btn>
                  </div>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in testValues"
                    :key="index">
                    <v-checkbox label="test"></v-checkbox>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-flex>
            <v-flex xs12 sm6>
              <v-select class="ma-2" hide-details outlined filled label="flight type" :items="testValues"></v-select>
              <v-select class="ma-2" hide-details outlined filled label="route type" :items="testValues"></v-select>
              <v-text-field class="ma-2" hide-details outlined filled label="airline"></v-text-field>
              <v-select class="ma-2" hide-details outlined filled label="cabin type" :items="testValues"></v-select>
              <v-menu nudge-width offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <v-text-field :value="ticketingDeadline" v-on="on" class="ma-2" hide-details outlined filled label="ticketing deadline" readonly></v-text-field>
                </template>
                <v-card>
                  <v-card-text>
                    <v-layout row justify-center>
                      <v-date-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="ticketingDeadline"></v-date-picker>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-menu>
            </v-flex>
            <v-flex xs12>
              <v-textarea label="notes" class="ma-2" outlined filled>
              </v-textarea>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card class="my-3 elevation-3">
          <v-card-title class="white--text primary body-1">
            <v-icon small left color="white">fas fa-user-friends</v-icon> passengers
          </v-card-title>
          <v-divider/>
          <v-layout row class="pa-5" justify-center>
            <span v-for="(item, index) in passengers" :key="index">
              <v-checkbox class="d-inline-flex ma-2" :label="item"/>
            </span>
          </v-layout>
        </v-card>
        <v-card class="my-3 elevation-3">
          <v-card-title class="white--text primary body-1">
            <v-icon small left color="white">fas fa-map</v-icon> itinerary
          </v-card-title>
          <v-divider/>
          <div class="scrollable">
            <v-simple-table class="my-3" style="min-width: 1000px;">
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td class="text-left"><v-icon small class="mr-2">fas fa-arrow-right</v-icon>OUTBOUND</td>
                    <td/><td/><td/><td/><td/>
                    <td class="text-left"><v-btn small text class="text-lowercase"><v-icon small left>fas fa-plus</v-icon>add</v-btn></td>
                  </tr>
                  <tr class="table-back">
                    <td class="text-left">
                      <v-text-field outlined label="from" hide-details></v-text-field>
                    </td>
                    <td class="text-left">
                      <v-menu nudge-width offset-y :close-on-content-click="false">
                        <template v-slot:activator="{ on }">
                          <v-text-field outlined label="departure" :value="departureDateAndTime" v-on="on" class="ma-2" hide-details readonly></v-text-field>
                        </template>
                        <v-card>
                          <v-card-text>
                            <v-layout row justify-center>
                              <v-date-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="departureDate"></v-date-picker>
                            </v-layout>
                            <v-layout row justify-center>
                              <v-time-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="departureTime"></v-time-picker>
                            </v-layout>
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </td>
                    <td class="text-left">
                      <v-text-field outlined label="to" hide-details></v-text-field>
                    </td>
                    <td class="text-left">
                      <v-menu nudge-width offset-y :close-on-content-click="false">
                        <template v-slot:activator="{ on }">
                          <v-text-field outlined label="arrival" :value="arrivalDateAndTime" v-on="on" class="ma-2" hide-details readonly></v-text-field>
                        </template>
                        <v-card>
                          <v-card-text>
                            <v-layout row justify-center>
                              <v-date-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="arrivalDate"></v-date-picker>
                            </v-layout>
                            <v-layout row justify-center>
                              <v-time-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="arrivalTime"></v-time-picker>
                            </v-layout>
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </td>
                    <td class="text-left">
                      <v-text-field outlined label="airline" hide-details></v-text-field>
                    </td>
                    <td class="text-left">
                      <v-text-field outlined label="flight no" hide-details></v-text-field>
                    </td>
                    <td class="text-left">
                      <v-select class="ma-2" outlined label="cabin" hide-details :items="testValues"></v-select>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-left"><v-icon small class="mr-2">fas fa-arrow-left</v-icon>INBOUND</td>
                    <td/><td/><td/><td/><td/>
                    <td class="text-left"><v-btn small text class="text-lowercase"><v-icon small left>fas fa-plus</v-icon>add</v-btn></td>
                  </tr>
                  <tr class="table-back">
                    <td class="text-left">
                      <v-text-field outlined label="from" hide-details></v-text-field>
                    </td>
                    <td class="text-left">
                      <v-menu nudge-width offset-y :close-on-content-click="false">
                        <template v-slot:activator="{ on }">
                          <v-text-field outlined label="departure" :value="departureDateAndTime" v-on="on" class="ma-2" hide-details readonly></v-text-field>
                        </template>
                        <v-card>
                          <v-card-text>
                            <v-layout row justify-center>
                              <v-date-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="departureDate"></v-date-picker>
                            </v-layout>
                            <v-layout row justify-center>
                              <v-time-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="departureTime"></v-time-picker>
                            </v-layout>
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </td>
                    <td class="text-left">
                      <v-text-field outlined label="to" hide-details></v-text-field>
                    </td>
                    <td class="text-left">
                      <v-menu nudge-width offset-y :close-on-content-click="false">
                        <template v-slot:activator="{ on }">
                          <v-text-field outlined label="arrival" :value="arrivalDateAndTime" v-on="on" class="ma-2" hide-details readonly></v-text-field>
                        </template>
                        <v-card>
                          <v-card-text>
                            <v-layout row justify-center>
                              <v-date-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="arrivalDate"></v-date-picker>
                            </v-layout>
                            <v-layout row justify-center>
                              <v-time-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="arrivalTime"></v-time-picker>
                            </v-layout>
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </td>
                    <td class="text-left">
                      <v-text-field outlined label="airline" hide-details></v-text-field>
                    </td>
                    <td class="text-left">
                      <v-text-field outlined label="flight no" hide-details></v-text-field>
                    </td>
                    <td class="text-left">
                      <v-select class="ma-2" outlined label="cabin" hide-details :items="testValues"></v-select>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-card>
        <v-card class="my-3 elevation-3">
          <v-card-title class="white--text primary body-1">
            <v-flex xs12 sm6>
              <v-icon small left color="white">fas fa-tag</v-icon> client price details
            </v-flex>
            <v-flex xs12 sm6>
              <div class="text-right">
                <v-btn small text class="ml-2 white--text text-lowercase"><v-icon small left>fas fa-plus</v-icon>add</v-btn>
              </div>
            </v-flex>
          </v-card-title>
          <v-divider/>
          <div class="scrollable">
            <v-simple-table class="my-3" style="min-width: 1000px;">
              <template v-slot:default>
                <tbody>
                  <tr class="table-back">
                    <td class="text-left"><v-text-field outlined hide-details label="label"></v-text-field></td>
                    <td class="text-left"><v-text-field outlined hide-details label="count"></v-text-field></td>
                    <td class="text-left"><v-text-field outlined hide-details label="gross"></v-text-field></td>
                    <td class="text-left"><v-text-field outlined hide-details label="tax"></v-text-field></td>
                    <td class="text-left"><v-select outlined hide-details label="product" :items="testValues"></v-select></td>
                    <td class="text-left"><v-select outlined hide-details label="vat rate" :items="testValues"></v-select></td>
                    <td class="text-left"><v-text-field outlined hide-details label="vat"></v-text-field></td>
                    <td class="text-center">{{clientDetailsTotal}}</td>
                  </tr>
                  <tr>
                    <td class="text-center">total</td>
                    <td/>
                    <td class="text-center">{{clientDetailsTotal}}</td>
                    <td class="text-center">{{clientDetailsTotal}}</td>
                    <td/>
                    <td/>
                    <td class="text-center">{{clientDetailsTotal}}</td>
                    <td class="text-center">{{clientDetailsTotal}}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-card>

        <v-card class="my-3 elevation-3">
          <v-card-title class="white--text primary body-1">
            <v-flex xs12 sm6>
              <v-icon small left color="white">fas fa-tags</v-icon> purchase cost details
            </v-flex>
            <v-flex xs4 sm2>
              <div class="text-right">
                <span class="white--text body-1 font-weight-bold">comm %</span>
              </div>
            </v-flex>
            <v-flex xs4 sm1>
              <v-text-field class="ml-2" color="white" background-color="grey lighten-3"></v-text-field>
            </v-flex>
            <v-flex xs4 sm3>
              <div class="text-right">
                <v-btn small text class="ml-2 white--text text-lowercase"><v-icon small left>fas fa-plus</v-icon>add</v-btn>
              </div>
            </v-flex>
          </v-card-title>
          <v-divider/>
          <div class="scrollable">
            <v-simple-table class="my-3" style="min-width: 1000px;">
              <template v-slot:default>
                <tbody>
                  <tr class="table-back">
                    <td class="text-left"><v-text-field outlined label="label" hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field outlined label="count" hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field outlined label="gross" hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field outlined label="tax" hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field outlined label="comm" hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field outlined label="vat" hide-details></v-text-field></td>
                    <td class="text-left"><v-btn small text><v-icon>fas fa-arrow-up</v-icon></v-btn></td>
                    <td class="text-center">{{clientDetailsTotal}}</td>
                  </tr>
                  <tr>
                    <td class="text-center">total</td>
                    <td/>
                    <td class="text-center">{{clientDetailsTotal}}</td>
                    <td class="text-center">{{clientDetailsTotal}}</td>
                    <td class="text-center">{{clientDetailsTotal}}</td>
                    <td class="text-center">{{clientDetailsTotal}}</td>
                    <td/>
                    <td class="text-center">{{clientDetailsTotal}}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-card>
        <v-card class="my-3 elevation-3">
          <v-card-title class="white--text primary body-1">
            <v-icon small left color="white">fas fa-barcode</v-icon> totals
          </v-card-title>
          <v-divider/>
            <v-layout justify-center>
              <v-flex xs12 sm6>
                <v-simple-table class="my-3 table-results">
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td class="text-left">total payable by client:</td>
                        <td class="text-right">{{clientDetailsTotal}}</td>
                      </tr>
                      <tr>
                        <td class="text-left">total payable to supplier:</td>
                        <td class="text-right">{{clientDetailsTotal}}</td>
                      </tr>
                      <tr>
                        <td class="text-left">client vat:</td>
                        <td class="text-right">{{clientDetailsTotal}}</td>
                      </tr>
                      <tr>
                        <td class="text-left">margin:</td>
                        <td class="text-right">{{clientDetailsTotal}}</td>
                      </tr>
                      <tr>
                        <td class="text-left">toms vat:</td>
                        <td class="text-right">{{clientDetailsTotal}}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-flex>
            </v-layout>
        </v-card>
        <v-layout justify-center row>
          <v-btn small class="white--text elevation-12 accent" width="120"><v-icon left>fas fa-times</v-icon> Cancel</v-btn>
          <v-btn small class="primary white--text elevation-13" width="120"><v-icon left>far fa-save</v-icon> Save</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Flight',
  data: () => ({
    testValues: [
      'test',
      'test2',
      'test3'
    ],
    passengers: [
      'Isaac Asimov',
      'William Golding',
      'Dante Alighieri',
      'Kurt Vonnegut',
      'Anthony Burgess'
    ],
    ticketingDeadline: '',
    departureDate: '',
    departureTime: '',
    arrivalDate: '',
    arrivalTime: '',
    clientDetailsTotal: '0.00'
  }),
  computed: {
    departureDateAndTime () {
      return this.departureDate + ' ' + this.departureTime
    },
    arrivalDateAndTime () {
      return this.arrivalDate + ' ' + this.arrivalTime
    }
  },
  methods: {
    logIt () {
      console.log('pressed!')
    }
  }
}
</script>
