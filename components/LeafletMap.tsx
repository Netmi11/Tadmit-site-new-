import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { CityData } from './IsraeliMap';

interface Props {
  cities: CityData[];
  active: string | null;
  setActive: (id: string | null) => void;
}

function makeIcon(city: CityData, isActive: boolean) {
  return L.divIcon({
    className: '',
    html: `
      <div style="position:relative;display:flex;align-items:center;justify-content:center;">
        ${isActive ? `<div style="
          position:absolute;width:36px;height:36px;border-radius:50%;
          background:${city.color}30;
          animation:pulse-ring 1.2s ease-out infinite;
        "></div>` : ''}
        <div style="
          width:${isActive ? 18 : 11}px;
          height:${isActive ? 18 : 11}px;
          border-radius:50%;
          background:${isActive ? city.color : 'rgba(255,255,255,0.65)'};
          border:2px solid ${isActive ? city.color : 'rgba(255,255,255,0.35)'};
          box-shadow:0 0 ${isActive ? '10px 3px' : '3px 1px'} ${city.color}70;
          transition:width 0.2s ease,height 0.2s ease,background 0.2s ease;
        "></div>
      </div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
}

// Fly to active city - does NOT fly back when deactivated
function MapController({ cities, active }: { cities: CityData[]; active: string | null }) {
  const map = useMap();
  useEffect(() => {
    if (!active) return;
    const city = cities.find(c => c.id === active);
    if (city) {
      map.flyTo([city.lat, city.lng], 12, { duration: 0.6, easeLinearity: 0.5 });
    }
  }, [active]);
  return null;
}

// Create markers once, update icon in-place on active change
function CityMarkers({ cities, active }: { cities: CityData[]; active: string | null }) {
  const map = useMap();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<Record<string, any>>({});

  // Create markers once
  useEffect(() => {
    cities.forEach(city => {
      const marker = L.marker([city.lat, city.lng], { icon: makeIcon(city, false) }).addTo(map);
      markersRef.current[city.id] = marker;
    });
    return () => {
      Object.values(markersRef.current).forEach((m: any) => m.remove());
      markersRef.current = {};
    };
  }, [cities]);

  // Update icons in-place - no marker recreation
  useEffect(() => {
    cities.forEach(city => {
      const marker = markersRef.current[city.id];
      if (marker) marker.setIcon(makeIcon(city, active === city.id));
    });
  }, [active, cities]);

  return null;
}

const LeafletMap: React.FC<Props> = ({ cities, active, setActive }) => {
  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden"
      style={{
        position: 'sticky',
        top: '20px',
        height: '520px',
        border: '1px solid rgba(0,180,216,0.15)',
        boxShadow: '0 0 80px rgba(0,180,216,0.08)',
      }}
    >
      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .leaflet-container { background: #0a1628 !important; }
        .leaflet-control-zoom {
          border: 1px solid rgba(0,180,216,0.25) !important;
          border-radius: 12px !important;
          overflow: hidden;
        }
        .leaflet-control-zoom a {
          background: rgba(10,22,40,0.9) !important;
          color: #00b4d8 !important;
          border-bottom: 1px solid rgba(0,180,216,0.15) !important;
          font-size: 18px !important;
        }
        .leaflet-control-zoom a:hover { background: rgba(0,180,216,0.15) !important; }
        .leaflet-control-attribution {
          background: rgba(10,22,40,0.7) !important;
          color: rgba(255,255,255,0.25) !important;
          font-size: 9px !important;
        }
        .leaflet-control-attribution a { color: rgba(255,255,255,0.35) !important; }
      `}</style>
      <MapContainer
        center={[31.85, 34.85]}
        zoom={8}
        style={{ width: '100%', height: '100%' }}
        zoomControl={true}
        scrollWheelZoom={false}
        doubleClickZoom={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
          subdomains="abcd"
          maxZoom={19}
        />
        <MapController cities={cities} active={active} />
        <CityMarkers cities={cities} active={active} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
