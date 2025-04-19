interface StudyCardProps {
    title: string
    description: string
  }
  
  const StudyCard = ({ title, description }: StudyCardProps) => {
    return (
      <div className="bg-[#151b27] p-8 rounded-lg border border-gray-800 hover:shadow-lg hover:shadow-blue-500/20 hover:border-cyan-500/50 transition-all duration-300">
        <div className="flex items-center mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    )
  }
  
  export default StudyCard