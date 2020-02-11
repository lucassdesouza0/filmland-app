import {mapApi, mapDetailApi} from './api';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export const getPermission = async () =>
  await Permissions.askAsync(Permissions.LOCATION);

export const getLocation = async () =>
  await Location.getCurrentPositionAsync({});

export const getCinemasLocation = location =>
  mapApi(location).request({method: 'GET'});

export const getCinemasDetail = id => mapDetailApi(id).request({method: 'GET'});
