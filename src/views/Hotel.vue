<template>
  <v-container>
    <v-layout
      align-center
      justify-center
      fill-height>
      <v-flex xs12 lg9 xl8>

        <v-card class="my-3 elevation-3">
          <v-card-title class="white--text primary">
            <v-icon left color="white">fas fa-info-circle</v-icon> product details
          </v-card-title>
          <v-divider/>
          <v-layout row class="pa-5">
            <v-flex xs12 sm6 md4>
              <v-text-field class="ma-2" hide-details outlined filled label="supplier" append-icon="fas fa-plus" @click:append="logIt"></v-text-field>
              <v-select class="ma-2" hide-details outlined filled label="supplier status" :items="testValues"></v-select>
              <v-text-field class="ma-2" hide-details outlined filled label="pnr conf no"></v-text-field>
              <v-select class="ma-2" hide-details outlined filled label="product type"  :items="testValues"></v-select>
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <div class="text-center">
                    <v-btn text v-on="on" style="width: 100%;">Options <v-icon small class="ml-2">fas fa-arrow-down</v-icon></v-btn>
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

            <v-flex xs12 sm6 md4>
              <v-select class="ma-2" hide-details outlined filled label="accomodation type" :items="testValues"></v-select>
              <v-text-field class="ma-2" hide-details outlined filled label="hotel name"></v-text-field>
              <v-text-field class="ma-2" hide-details outlined filled label="hotel address"></v-text-field>
              <v-layout class="my-2 mx-3" row>
                <v-flex xs4>
                  <v-text-field hide-details outlined filled label="city"></v-text-field>
                </v-flex>
                <v-flex xs4>
                  <v-text-field hide-details outlined filled label="city area"></v-text-field>
                </v-flex>
                <v-flex xs4>
                  <v-text-field hide-details outlined filled label="country"></v-text-field>
                </v-flex>
              </v-layout>
              <v-text-field class="ma-2" hide-details outlined filled label="nights"></v-text-field>
            </v-flex>

            <v-flex xs12 sm6 md4 class="text-center">
              star rating:<v-rating :half-increments="true" id="rating" background-color="primary" color="primary"></v-rating>
              <v-text-field class="ma-2" hide-details outlined filled label="email"></v-text-field>
              <v-text-field class="ma-2" hide-details outlined filled label="tel"></v-text-field>
              <v-menu nudge-width offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <v-text-field :value="checkinDateAndTime" v-on="on" class="ma-2" hide-details outlined filled label="check in" readonly></v-text-field>
                </template>
                <v-card>
                  <v-card-text>
                    <v-layout row justify-center>
                      <v-date-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="checkinDate"></v-date-picker>
                    </v-layout>
                    <v-layout row justify-center>
                      <v-time-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="checkinTime"></v-time-picker>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-menu>
              <v-menu nudge-width offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <v-text-field :value="checkoutDateAndTime" v-on="on" class="ma-2" hide-details outlined filled label="check out" readonly></v-text-field>
                </template>
                <v-card>
                  <v-card-text>
                    <v-layout row justify-center>
                      <v-date-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="checkoutDate"></v-date-picker>
                    </v-layout>
                    <v-layout row justify-center>
                      <v-time-picker :landscape="$vuetify.breakpoint.name != 'xs'" v-model="checkoutTime"></v-time-picker>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-menu>
            </v-flex>

            <v-flex xs12 sm6 md12>
              <v-textarea label="notes" outlined filled class="ma-2">
              </v-textarea>
            </v-flex>
          </v-layout>
        </v-card>

        <v-card class="my-3 elevation-3">
          <v-card-title class="white--text primary">
            <v-flex xs12 sm6>
              <v-icon left color="white">fas fa-user-friends</v-icon> rooms and passengers
            </v-flex>
            <v-flex xs12 sm6>
              <div class="text-right">
                <v-btn text class="ml-2 white--text text-lowercase"><v-icon small class="mr-2">fas fa-plus</v-icon>add room</v-btn>
                <v-btn text class="ml-2 white--text text-lowercase"><v-icon small class="mr-2">fas fa-edit</v-icon>edit passengers</v-btn>
              </div>
            </v-flex>
          </v-card-title>
          <v-divider/>
          <div class="scrollable">
            <v-simple-table class="my-3" style="min-width: 800px;">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center">room category</th>
                    <th class="text-center">room name</th>
                    <th class="text-center">meal basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-back">
                    <td>1.</td>
                    <td class="text-left"><v-select hide-details :items="testValues"></v-select></td>
                    <td class="text-left"><v-select hide-details :items="testValues"></v-select></td>
                    <td class="text-left">
                      <v-layout>
                        <v-flex xs6>
                          <v-text-field outlined filled hide-details value="RO"></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                          <v-select outlined filled hide-details :items="testValues" value="Room Only"></v-select>
                        </v-flex>
                      </v-layout>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <v-menu offset-y :close-on-content-click="false">
                        <template v-slot:activator="{ on }">
                          <div>
                            <v-btn class="text-lowercase primary ma-2" v-on="on">passengers<v-icon class="ml-2" small>fas fa-arrow-right</v-icon></v-btn>
                          </div>
                        </template>
                        <v-list>
                          <v-list-item
                            v-for="(passenger, index) in passengers"
                            :key="index">
                            <v-checkbox :label="passenger" @change="addPassenger($event, passenger)"></v-checkbox>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                      <span class="ma-2" v-for="(passenger, i) in activePassengers" :key="i">{{ passenger }}</span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-card>

        <v-card class="my-3 elevation-3">
          <v-card-title class="white--text primary">
            <v-flex xs12 sm6>
              <v-icon left color="white">fas fa-tag</v-icon> client price details
            </v-flex>
            <v-flex xs12 sm6>
              <div class="text-right">
                <v-btn text class="ml-2 white--text text-lowercase"><v-icon small left>fas fa-plus</v-icon>add</v-btn>
              </div>
            </v-flex>
          </v-card-title>
          <v-divider/>
          <div class="scrollable">
            <v-simple-table class="my-3" style="min-width: 1000px;">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">label</th>
                    <th class="text-center">count</th>
                    <th class="text-center">gross</th>
                    <th class="text-center">tax</th>
                    <th class="text-center">product</th>
                    <th class="text-center">vat rate</th>
                    <th class="text-center">vat</th>
                    <th class="text-center">total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-back">
                    <td class="text-left"><v-text-field hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field hide-details></v-text-field></td>
                    <td class="text-left"><v-select hide-details :items="testValues"></v-select></td>
                    <td class="text-left"><v-select hide-details :items="testValues"></v-select></td>
                    <td class="text-left"><v-text-field hide-details></v-text-field></td>
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
          <v-card-title class="white--text primary">
            <v-flex xs12 sm6>
              <v-icon left color="white">fas fa-tags</v-icon> purchase cost details
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
                <v-btn text class="ml-2 white--text text-lowercase"><v-icon small left>fas fa-plus</v-icon>add</v-btn>
              </div>
            </v-flex>
          </v-card-title>
          <v-divider/>
          <div class="scrollable">
            <v-simple-table class="my-3" style="min-width: 1000px;">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">label</th>
                    <th class="text-center">count</th>
                    <th class="text-center">gross</th>
                    <th class="text-center">tax</th>
                    <th class="text-center">comm</th>
                    <th class="text-center">vat</th>
                    <th></th>
                    <th class="text-center">total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-back">
                    <td class="text-left"><v-text-field hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field hide-details></v-text-field></td>
                    <td class="text-left"><v-text-field hide-details></v-text-field></td>
                    <td class="text-left"><v-btn text><v-icon>fas fa-arrow-up</v-icon></v-btn></td>
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
          <v-card-title class="white--text primary">
            <v-icon left color="white">fas fa-barcode</v-icon> totals
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
          <v-btn class="accent white--text elevation-12" text width="120"><v-icon left>fas fa-times</v-icon> Cancel</v-btn>
          <v-btn class="primary white--text elevation-13" text width="120"><v-icon left>far fa-save</v-icon> Save</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Hotel',
  data: () => ({
    testValues: [
      'test',
      'test2',
      'test3'
    ],
    ticketingDeadline: '',
    checkinDate: '',
    checkinTime: '',
    checkoutDate: '',
    checkoutTime: '',
    clientDetailsTotal: '0.00',
    passengers: [
      'Isaac Asimov',
      'William Golding',
      'Dante Alighieri',
      'Kurt Vonnegut',
      'Anthony Burgess'
    ],
    activePassengers: [],
    roomNum: 1
  }),
  computed: {
    checkinDateAndTime () {
      return this.checkinDate + ' ' + this.checkinTime
    },
    checkoutDateAndTime () {
      return this.checkoutDate + ' ' + this.checkoutTime
    }
  },
  methods: {
    logIt () {
      console.log('pressed!')
    },
    addPassenger (e, pass) {
      if (e) {
        this.activePassengers.push(pass)
      } else {
        const aux = this.activePassengers.indexOf(pass)
        if (aux > -1) {
          this.activePassengers.splice(aux, 1)
        }
      }
    }
  }
}
</script>
