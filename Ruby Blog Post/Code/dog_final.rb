class Dog
    attr_accessor :name
    attr_accessor :vaccines
    
    def initialize(name)
        @name = name
        @vaccines = {}
    end
    
    def bark(num)
        vocals = ["Bark", "Woof", "Whimper"]
        vocal = vocals.sample.upcase
        num.times do
            puts vocal
        end
        
    end
    
    def add_vaccine(name,date)
        @vaccines.store(name,date)
    end
end
ralph = Dog.new("ralph")
ralph.name
ralph.bark(10)
ralph.add_vaccine("Rabies", Time.now)
puts ralph.vaccines