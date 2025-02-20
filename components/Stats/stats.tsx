export default function Stats() {
    const stats = {
      prescriptionsDelivered: '100k+',
      patientsTreated: '15k+',
      pharmaciesSupplied: '150+'
    };
  
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Here&apos;s why we are better</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-500">{stats.prescriptionsDelivered}</p>
              <p className="text-gray-600">Prescriptions Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-500">{stats.patientsTreated}</p>
              <p className="text-gray-600">Patients Treated</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-500">{stats.pharmaciesSupplied}</p>
              <p className="text-gray-600">Pharmacies & Hospitals Supplied</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  