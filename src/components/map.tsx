"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// تنظیم آیکون Marker
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

const position: [number, number] = [35.6892, 51.389]; // تهران

export default function MapClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // جلوگیری از اجرا در SSR یا قبل از mount
  if (!mounted) return null;

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="z-0"
      style={{ height: "400px", width: "100%"}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>ما اینجاییم! تهران ☕️</Popup>
      </Marker>
    </MapContainer>
  );
}
