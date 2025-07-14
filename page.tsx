import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PhoneCall,
  CalendarDays,
  MapPin,
  Clock,
  Camera,
  DollarSign,
  Image as ImageIcon,
} from "lucide-react";

export default function TopGunCuts() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Top Gun Cuts</h1>
        <p className="text-lg text-gray-600">
          Precision Cuts. Elite Style. Gulfport's Finest Barber Experience.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="p-6">
            <CalendarDays className="mx-auto text-blue-500 mb-2" size={32} />
            <h2 className="text-xl font-semibold">Book an Appointment</h2>
            <p className="text-gray-600">
              Fast and easy scheduling. Walk-ins welcome too!
            </p>
            <Button className="mt-4" asChild>
              <a href="sms:2282243114">Text to Book</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <PhoneCall className="mx-auto text-green-500 mb-2" size={32} />
            <h2 className="text-xl font-semibold">Call or Text</h2>
            <p className="text-gray-600">
              Got questions or want to chat about styles? Hit us up.
            </p>
            <p className="text-gray-800 mt-2 font-medium">228-224-3114</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <MapPin className="mx-auto text-red-500 mb-2" size={32} />
            <h2 className="text-xl font-semibold">Visit Us</h2>
            <p className="text-gray-600">
              Conveniently located in Gulfport, MS.
            </p>
            <p className="text-gray-800 mt-2 font-medium">
              1670 F Pass Rd. Biloxi, MS 39531
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <Clock className="mx-auto text-yellow-500 mb-2" size={32} />
            <h2 className="text-xl font-semibold">Hours of Operation</h2>
            <p className="text-gray-600 mt-2">Monday – Thursday: 8am – 2pm</p>
            <p className="text-gray-600">Saturday: 8am – 2pm</p>
            <p className="text-gray-600">Sunday: 10am – 2pm</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Camera className="mx-auto text-purple-500 mb-2" size={32} />
            <h2 className="text-xl font-semibold">Follow Us on Instagram</h2>
            <p className="text-gray-600">
              Stay up to date and check out our latest cuts.
            </p>
            <a
              href="https://instagram.com/Top_Gun_Cuts"
              target="_blank"
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              @Top_Gun_Cuts
            </a>
          </CardContent>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <DollarSign className="mx-auto text-green-600 mb-2" size={32} />
            <h2 className="text-xl font-semibold">Price List</h2>
            <ul className="text-gray-700 mt-4 space-y-2">
              <li>
                All Haircuts: <span className="font-medium">$20</span>
              </li>
              <li>
                Beard: <span className="font-medium">$10 – $15</span>
              </li>
              <li>
                Hot Towel Shave: <span className="font-medium">$30</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <ImageIcon className="mx-auto text-pink-500 mb-2" size={32} />
            <h2 className="text-xl font-semibold">Gallery</h2>
            <p className="text-gray-600 mb-4">
              Check out some of our latest work below:
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-300 h-24 rounded-lg animate-pulse"></div>
              <div className="bg-gray-300 h-24 rounded-lg animate-pulse"></div>
              <div className="bg-gray-300 h-24 rounded-lg animate-pulse"></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">(Upload photos soon!)</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-center mb-4">
              Find Us on the Map
            </h2>
            <div className="w-full h-64">
              <iframe
                title="Top Gun Cuts Map"
                src="https://www.google.com/maps?q=1670+F+Pass+Rd,+Biloxi,+MS+39531&output=embed"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg border border-gray-300"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Top Gun Cuts. All rights reserved.
      </footer>
    </div>
  );
}