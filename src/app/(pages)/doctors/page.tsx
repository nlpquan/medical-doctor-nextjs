"use client";

import React, { useEffect, useState } from "react";
import { Doctor } from "@/types/doctor";

interface PaginatedResponse {
  doctors: Doctor[];
  currentPage: number;
  totalPages: number;
}

const Doctors: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchFirstName, setSearchFirstName] = useState<string>("");
  const [searchLastName, setSearchLastName] = useState<string>("");

  const fetchDoctors = (
    page: number = 0,
    searchParams?: { firstName?: string; lastName?: string },
  ) => {
    setLoading(true); // Start loading
    let query = `page=${page}`;
    if (searchParams) {
      query += searchParams.firstName
        ? `&firstName=${encodeURIComponent(searchParams.firstName)}`
        : "";
      query += searchParams.lastName
        ? `&lastName=${encodeURIComponent(searchParams.lastName)}`
        : "";
    }

    fetch(`http://localhost:8080/api/doctors?${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: PaginatedResponse) => {
        setDoctors(data.doctors);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
      })
      .finally(() => {
        setLoading(false); // End loading
      });
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleSearch = () => {
    fetchDoctors(0, { firstName: searchFirstName, lastName: searchLastName });
  };

  const handlePageChange = (newPage: number) => {
    fetchDoctors(newPage, {
      firstName: searchFirstName,
      lastName: searchLastName,
    });
  };

  return (
    <div className="relative p-4">
      {loading && (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-lg text-white">Loading...</div>
        </div>
      )}
      <h1 className="mb-6 text-center text-2xl font-bold">Doctors Page</h1>
      <div>
        <input
          type="text"
          placeholder="Search by First Name"
          value={searchFirstName}
          onChange={(e) => setSearchFirstName(e.target.value)}
          className="mr-2 rounded border px-2 py-1"
        />
        <input
          type="text"
          placeholder="Search by Last Name"
          value={searchLastName}
          onChange={(e) => setSearchLastName(e.target.value)}
          className="mr-2 rounded border px-2 py-1"
        />
        <button
          onClick={handleSearch}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {!loading && (
        <ul className="mt-4 list-disc pl-5">
          {doctors.map((doctor) => (
            <li key={doctor.id} className="mb-2">
              <span className="font-semibold">
                {doctor.firstName} {doctor.lastName}
              </span>{" "}
              - <span className="italic">{doctor.priSpec}</span>
            </li>
          ))}
        </ul>
      )}

      {!loading && (
        <div className="mt-4 flex justify-center">
          <button
            className="mx-1 rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
            disabled={currentPage === 0}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            className="mx-1 rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
            disabled={currentPage === totalPages - 1}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Doctors;
