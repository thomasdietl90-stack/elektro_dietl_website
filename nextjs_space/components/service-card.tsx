
import { CheckCircle, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  service: {
    icon: LucideIcon
    title: string
    description: string
    featured?: boolean
    benefits: string[]
    details: string
  }
  featured: boolean
}

export default function ServiceCard({ service, featured }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <div className={`rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow ${
      featured ? 'border-2 border-teal-500' : ''
    }`}>
      {/* Header */}
      <div className={`p-8 text-white ${
        featured 
          ? 'bg-gradient-to-br from-teal-600 to-teal-800' 
          : 'bg-gradient-to-br from-gray-600 to-gray-800'
      }`}>
        <Icon className="h-16 w-16 mb-4" />
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className={featured ? 'text-teal-100' : 'text-gray-300'}>
          {service.description}
        </p>
      </div>

      {/* Content */}
      <div className="p-8 bg-white">
        <p className="text-gray-700 mb-6">{service.details}</p>
        
        <h4 className="font-bold text-gray-900 mb-4">Leistungsumfang:</h4>
        <div className="space-y-3">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                featured ? 'text-teal-600' : 'text-gray-600'
              }`} />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
