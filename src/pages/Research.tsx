import React, { useState } from 'react';
import research1 from "../assets/research1.png";
import research2 from "../assets/research2.png";
import research3 from "../assets/research3.png";

const categories = [
  { id: 'common', label: 'Khoa học thường thức' },
  { id: 'advanced', label: 'Khoa học chuyên sâu' }
];

const articles = {
  common: [
    {
      id: 1,
      title: "Ứng dụng Machine Learning trong Y học",
      description: "Nghiên cứu về cách áp dụng học máy để chẩn đoán bệnh chính xác hơn.",
      image: research1,
      details: "Chi tiết bài nghiên cứu về Machine Learning trong Y học..."
    }
  ],
  advanced: [
    {
      id: 2,
      title: "Công nghệ Blockchain và Bảo mật Dữ liệu",
      description: "Khám phá cách blockchain có thể cải thiện tính minh bạch và bảo mật trong các hệ thống dữ liệu.",
      image: research2,
      details: "Chi tiết về công nghệ Blockchain trong bảo mật dữ liệu..."
    },
    {
      id: 3,
      title: "Tác động của AI đối với Giáo dục",
      description: "Phân tích sự thay đổi của giáo dục dưới tác động của trí tuệ nhân tạo.",
      image: research3,
      details: "Phân tích chi tiết về tác động của AI đến giáo dục..."
    }
  ]
};

const Research = () => {
  const [activeTab, setActiveTab] = useState('common');
  const [expandedArticle, setExpandedArticle] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài báo nghiên cứu khoa học</h1>
      
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`py-2 px-4 rounded-md font-medium ${activeTab === category.id ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="space-y-4">
        {articles[activeTab].map((article) => (
          <div 
            key={article.id} 
            className="flex border rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
          >
            <img src={article.image} alt={article.title} className="w-1/3 h-48 object-cover" />
            <div className="p-4 w-2/3">
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
              {expandedArticle === article.id && (
                <p className="text-gray-700 mt-2">{article.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;