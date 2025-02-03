import React, { useEffect, useState } from "react";

const StoreLocator = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [locations] = useState([
    {
      lat: 10.852323880688784,
      lng: 106.76065967549762,
      title: "CLB CỜ VUA TP.THỦ ĐỨC - CƠ SỞ CHƯƠNG DƯƠNG",
      address: "26 Chương Dương, P, TP. Thủ Đức, Hồ Chí Minh",
      phone: "0333 22 00 58",
      district: "Thủ Đức",
      src: "https://lh5.googleusercontent.com/p/AF1QipOlwemjRaSkGUCdiMMmcPeIQPjbYfRkh2dJN86J=w224-h298-k-no",
      link: "https://maps.app.goo.gl/Tu14EMZVj7m36X9c8",
    },
    {
      lat: 10.860524632788005,
      lng: 106.73968199640146,
      title: "CLB CỜ VUA TP.THỦ ĐỨC - CƠ SỞ ĐẠT GIA",
      address:
        "00.09 Chung Cư Đạt Gia, Cây Keo, Tam Phú, TP. Thủ đức, Thủ Đức, Hồ Chí Minh",
      phone: "0333 22 00 58",
      district: "Thủ Đức",
      src: "https://lh5.googleusercontent.com/p/AF1QipM-aexjzwPpKE5HdAECaDvzCkLMnlxlO-9LMiOp=w408-h544-k-no",
      link: "https://maps.app.goo.gl/UjJCtMHtXgFehWQz6",
    },
    {
      lat: 10.8472756721154,
      lng: 106.72353209136203,
      title: "CLB CỜ VUA TP.THỦ ĐỨC - CƠ SỞ HIỆP BÌNH PHƯỚC",
      address: "23 Đ. số 4, Hiệp Bình Phước, Thủ Đức, Hồ Chí Minh",
      phone: "0333 22 00 58",
      district: "Thủ Đức",
      src: "https://lh5.googleusercontent.com/p/AF1QipNrtCMW12xLxfrl2nCmJ4a4cCCaxVhw0hKac2O-=w492-h240-k-no",
      link: "https://maps.app.goo.gl/UbeXkfrjEW6k7irA7",
    },
    {
      lat: 10.845617044890918,
      lng: 106.78837299825449,
      title: "CLB CỜ VUA TP.THỦ ĐỨC - CƠ SỞ QUẬN 9",
      address: "343 Lê Văn Việt, Hiệp Phú, Quận 9, Hồ Chí Minh",
      phone: "0333 22 00 58",
      district: "Quận 9",
      src: "https://lh5.googleusercontent.com/p/AF1QipP8i4MvKkvSRXkdp5FaC7qhN9DWaarsbJ21q5AR=w408-h306-k-no",
      link: "https://maps.app.goo.gl/FwJDqJDS6UZN3X6b8",
    },
    {
      lat: 10.844441385140952,
      lng: 106.83968300989285,
      title: "CLB CỜ VUA TP.THỦ ĐỨC - CƠ SỞ VINHOMES GRAND PARK",
      address:
        "Origami S10.01 VINHOMES GRAND PARK, 211 Phước Thiện, Long Bình, Quận 9, Hồ Chí Minh",
      phone: "0333 22 00 58",
      district: "Quận 9",
      src: "https://lh5.googleusercontent.com/p/AF1QipNrtCMW12xLxfrl2nCmJ4a4cCCaxVhw0hKac2O-=w492-h240-k-no",
      link: "https://maps.app.goo.gl/aNbUfLraGCiQCCd8A",
    },
  ]);
  const [selectedDistrict, setSelectedDistrict] = useState<number>(1);
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(
    null
  );

  const districts = [
    { id: 1, name: "--- Chọn Khu Vực ---" },
    { id: 2, name: "Quận 9" },
    { id: 3, name: "Thủ Đức" },
  ];

  useEffect(() => {
    const initMap = () => {
      const mapElement = document.getElementById("map");
      if (mapElement) {
        const initialMap = new window.google.maps.Map(mapElement, {
          center: { lat: 10.851355314422792, lng: 106.79145187818142 },
          zoom: 12,
        });
        setMap(initialMap);
        setInfoWindow(new window.google.maps.InfoWindow());
        addMarkers(initialMap, locations);
      }
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC-oZCHMbXoaqfL_Lb2f6UJApsmyfCnUVI&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      const script = document.querySelector(
        `script[src*="maps.googleapis.com"]`
      );
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [locations]);

  const addMarkers = (
    map: google.maps.Map,
    locations: {
      lat: number;
      lng: number;
      title: string;
      address: string;
      phone: string;
      district: string;
    }[]
  ) => {
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);

    if (locations.length === 0) return; // Không thêm marker nếu không có cơ sở nào

    locations.forEach((location) => {
      const marker = new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.title,
      });

      marker.addListener("click", () => {
        if (infoWindow) {
          infoWindow.setContent(`
            <div>
              <h2>${location.title}</h2>
              <p>${location.address}</p>
              <p>Điện thoại: ${location.phone}</p>
            </div>
          `);
          infoWindow.open(map, marker);
          map.setCenter(marker.getPosition()!);
        }
      });

      setMarkers((prevMarkers) => [...prevMarkers, marker]);
    });
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const districtId = parseInt(event.target.value, 10);
    setSelectedDistrict(districtId);

    const filtered =
      districtId === 1
        ? locations
        : locations.filter(
            (location) => location.district === districts[districtId - 1].name
          );
    setFilteredLocations(filtered);
    if (map) {
      addMarkers(map, filtered);
      const bounds = new window.google.maps.LatLngBounds();
      filtered.forEach((location) => {
        bounds.extend(
          new window.google.maps.LatLng(location.lat, location.lng)
        );
      });
      map.fitBounds(bounds);
    }
  };

  const handleLocationClick = (location: {
    lat: number;
    lng: number;
    title: string;
    address: string;
    phone: string;
    district: string;
  }) => {
    if (map) {
      const position = new window.google.maps.LatLng(
        location.lat,
        location.lng
      );
      map.setCenter(position);
      map.setZoom(15); // Zoom vào vị trí của cơ sở
      if (infoWindow) {
        infoWindow.setContent(`
          <div>
            <h2>${location.title}</h2>
            <p>${location.address}</p>
            <p>Điện thoại: ${location.phone}</p>
          </div>
        `);
        infoWindow.setPosition(position);
        infoWindow.open(map);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 font-roboto">
      <h1 className="text-center text-4xl font-bold mb-6 text-gray-800">
        HỆ THỐNG <span className="text-blue-600">CHI NHÁNH</span>
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="district-select"
            >
              Chọn Quận
            </label>
            <select
              id="district-select"
              className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
              onChange={handleDistrictChange}
            >
              {districts.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>
            <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
              TÌM KIẾM
            </button>
          </div>
          <div className="overflow-y-auto h-96">
            <p className="mb-2 text-gray-600">
              Tìm thấy{" "}
              <span className="font-bold text-blue-600">
                {filteredLocations.length}
              </span>{" "}
              cửa hàng
            </p>
            {filteredLocations.map((location, index) => (
              <div
                key={index}
                className="mb-2"
                onClick={() => handleLocationClick(location)}
              >
                <div className="flex mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition duration-200">
                  <img
                    alt="Image of store"
                    className="w-24 h-24 border border-gray-300 mr-4"
                    height="100"
                    src={location.src}
                    width="100"
                  />
                  <div>
                    <p className="font-bold text-blue-600">{location.title}</p>
                    <p className="text-gray-700">{location.address}</p>
                    <a
                      className="text-blue-600 px-2 py-1 transition duration-200 hover:text-green-600"
                      href={location.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Xem bản đồ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/3 h-96 lg:h-auto mt-4 lg:mt-0">
          <div id="map" className="w-full h-full rounded-lg shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
