/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
           $('#get-user-data').click(function () {
             var showData = $('#show-data');
             $.getJSON('js/users.json', function (data) {
               var users = data.users.map(function (user) {
                 return user.ID + ': ' + user.Name;
               });
               showData.empty();
               if (users.length) {
                 var content = '<li>' + users.join('</li><li>') + '</li>';
                 var list = $('<ul />').html(content);
                 showData.append(list);
               }
             });
             showData.text('Loading the JSON file.');
           });
           $('#get-location-data').click(function () {
             var showData = $('#show-location-data');
             $.getJSON('js/users.json', function (data) {
               var locations = data.location.coordinate.map(function (location) {
                 return '<td>'+location.address + '</td><td> '+location.lat + '</td><td> ' + location.long + '</td>';
               });
               if (locations.length) {
                 var content = '<tr>' + locations.join('</tr><tr>') + '</tr>';
                 showData.append(content);
               }
             });
           });
    },

};

app.initialize();