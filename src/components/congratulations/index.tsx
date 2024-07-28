import {
  Card,
  CardBody,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
const Congratulations = () => {
  return (
    <div>
      <Card className="shadow-lg">
        <CardBody>
          <Typography variant="h5" color="blue" className="mb-4">
            Congratulations
          </Typography>
          <Typography variant="paragraph" className="text-[#607d8b]">
            Congratulations on making it this far! 🎉 If you've read through
            this thread and learned something new, you're already taking great
            steps in your tech journey. Your dedication to learning is
            commendable! Did you find this content helpful? I'd be thrilled if
            you could show your support:
          </Typography>
          <List>
            <ListItem>- Like this post to let me know you enjoyed it</ListItem>
            <ListItem>
              - Repost on X (Twitter) to share the knowledge with others
            </ListItem>
            <ListItem>
              - Follow for more tech insights and tutorials Your engagement is
              what fuels this learning community.
            </ListItem>
          </List>
          <Typography variant="paragraph" className="text-[#607d8b]">
            It motivates me to keep creating and updating content for tech
            enthusiasts and learners like you. Remember, every expert was once a
            beginner. Keep learning, keep growing! See you in the next lesson,
            where we'll dive even deeper into the world of tech. Stay curious!
            💡👩‍💻👨‍💻 👋
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Congratulations;
